import { NavLink, useLocation } from 'react-router-dom';
import { List, Item, ImgWrapper, InfoWrapper } from './MoviesList.styled';
import PropTypes from 'prop-types';
import defaultImg from '../../images/movie-corn.jpg';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <List>
      {movies.map(
        ({
          id,
          poster_path,
          original_title,
          name,
          vote_average,
          vote_count,
        }) => (
          <Item key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <ImgWrapper>
                <img
                  src={poster_path ? BASE_IMG_URL + poster_path : defaultImg}
                  alt={name}
                />
              </ImgWrapper>
              <InfoWrapper>
                <h2>{original_title ?? name}</h2>
                <p>Rating: {vote_average}</p>
                <p>Votes: {vote_count} </p>
              </InfoWrapper>
            </NavLink>
          </Item>
        )
      )}
    </List>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      name: PropTypes.string,
      original_title: PropTypes.string,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
    })
  ).isRequired,
};

export default MoviesList;
