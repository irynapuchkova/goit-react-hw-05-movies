import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from '../../API/fetchMovieInformation';
import noImage from '../../../src/default_profImg_2.png';

export default function CastView() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    (async function () {
      try {
        const { cast } = await fetchMovieCast(movieId);
        if (cast) {
          setCast(cast);
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`http://image.tmdb.org/t/p/w500${actor.profile_path}`}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = noImage;
                }}
                alt={actor.name}
                height={213}
                loading="lazy"
              ></img>
              {actor.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
