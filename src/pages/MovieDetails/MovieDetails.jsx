import Loader from 'components/Loader';
import {
  ImgWrapper,
  InfoWrapper,
  ItemWrapper,
  Btn,
  AdditionInfoWrapper,
  Link,
} from './MovieDetails.styled';
import { useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import * as API from '../../services/api';
import { BiArrowBack } from 'react-icons/bi';
import defaultImg from '../../images/movie-corn.jpg';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    const abortConroller = new AbortController();
    API.getMoviesDetailsById(movieId, abortConroller).then(setMovie);

    return () => {
      abortConroller.abort();
    };
  }, [movieId]);

  if (!movie) {
    return <Loader />;
  }

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  const {
    poster_path,
    genres,
    title,
    original_title,
    overview,
    release_date,
    vote_average,
  } = movie;

  const imgUrl = BASE_IMG_URL + poster_path;
  const genresToShow = genres.map(genre => genre.name).join(', ');

  return (
    <div>
      <Btn type="button" onClick={handleGoBack}>
        <BiArrowBack size="1.5em" />
        Go back
      </Btn>
      <ItemWrapper>
        <ImgWrapper>
          <img src={poster_path ? imgUrl : defaultImg} alt={title} />
        </ImgWrapper>
        <InfoWrapper>
          <h2>
            {title ?? original_title} ({Number.parseInt(release_date)})
          </h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresToShow} </p>
        </InfoWrapper>
      </ItemWrapper>
      <AdditionInfoWrapper>
        <Link to="cast" state={{ from: location?.state?.from ?? '/' }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location?.state?.from ?? '/' }}>
          Reviews
        </Link>
      </AdditionInfoWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetails;
