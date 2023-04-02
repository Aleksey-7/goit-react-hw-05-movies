import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import { List } from './Reviews.styled';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortConroller = new AbortController();
    API.getMovieReviews(movieId, abortConroller).then(setReviews);

    return () => {
      abortConroller.abort();
    };
  }, [movieId]);

  return (
    <div>
      <List>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </List>
    </div>
  );
}

export default Reviews;
