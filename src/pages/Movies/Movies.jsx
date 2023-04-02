import Error from 'components/Error';
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../services/api';
import { Form, Input, SearchBtn } from './Movies.styled';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [value, setValue] = useState(query ?? '');

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('pending');
    const abortConroller = new AbortController();
    API.getMoviesByQuery(query, abortConroller)
      .then(data => {
        setMovies(data);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });

    return () => {
      abortConroller.abort();
    };
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const nextParams = query !== '' ? { query: e.target.query.value } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <h1>Movies</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          name="query"
        />
        <SearchBtn type="submit" className="searchForm-button">
          <BsSearch size="2em" />
        </SearchBtn>
      </Form>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MoviesList movies={movies} />}
      {status === 'rejected' && <Error error={error.message} />}
    </div>
  );
}

export default Movies;
