import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import { List, ActorItem } from './Cast.styled';
import defaultImgCast from '../../images/anonim.jpg';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const GOOGLE_SERACH = 'https://www.google.com/search?q=';

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortConroller = new AbortController();
    API.getMovieCast(movieId, abortConroller).then(setCast);

    return () => {
      abortConroller.abort();
    };
  }, [movieId]);

  return (
    <div>
      <List>
        {cast.map(cast => (
          <ActorItem key={cast.cast_id}>
            <a
              href={GOOGLE_SERACH + cast.original_name}
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                width={250}
                src={
                  cast.profile_path
                    ? BASE_IMG_URL + cast.profile_path
                    : defaultImgCast
                }
                alt={cast.original_name}
              />
              <p>{cast.original_name}</p>
            </a>
          </ActorItem>
        ))}
      </List>
    </div>
  );
}

export default Cast;
