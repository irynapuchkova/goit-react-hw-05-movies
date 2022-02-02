import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReview } from '../../API/fetchMovieInformation';

import s from './ReviewsView.module.css';

export default function ReviewsView() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId.trim()) return;

    (async function () {
      try {
        const { results } = await fetchMovieReview(movieId);
        if (results) {
          setReviews(results);
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(({ id, content }) => (
            <li key={id}>{content}</li>
          ))}
        </ul>
      )}

      {reviews.length === 0 && (
        <p className={s.message}>
          Your REVIEW for this movie could be the first:)
        </p>
      )}
    </>
  );
}
