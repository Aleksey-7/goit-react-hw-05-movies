const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function getDataSelectedMovie(data) {
  const {
    poster_path,
    genres,
    vote_average,
    vote_count,
    popularity,
    title,
    original_title,
    overview,
    release_date,
  } = data;

  const imgUrl = BASE_IMG_URL + poster_path;
  const genresToShow = genres.map(genre => genre.name).join(', ');

  return {
    imgUrl: imgUrl,
    name: title,
    vote: vote_average.toFixed(1),
    votes: vote_count,
    popularity: popularity,
    originalTitle: original_title,
    genres: genresToShow,
    about: overview,
    year: Number.parseInt(release_date),
  };
}
