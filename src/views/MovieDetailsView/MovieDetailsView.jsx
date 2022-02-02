import { useState, useEffect } from 'react';
import {
  NavLink,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { fetchMovieDetails } from '../../API/fetchMovieInformation';
import noImage from '../../../src/default_profImg_2.png';

import s from './MovieDitailsView.module.css';

const setActive = ({ isActive }) => (isActive ? s.active : s.link);

export default function MovieDetailsView() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  const onBtnBackClick = () => {
    navigate(location.state?.from ? location.state.from : '/', {
      replace: true,
    });
  };

  useEffect(() => {
    (async function () {
      try {
        const { data } = await fetchMovieDetails(movieId);
        if (data) {
          setMovie(data);
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      <button className={s.backButton} type="button" onClick={onBtnBackClick}>
        Go back ...
      </button>
      {movie && (
        <div>
          <section>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              onError={e => {
                e.target.onerror = null;
                e.target.src = noImage;
              }}
              alt={movie.title}
              loading="lazy"
            ></img>
            <div className={s.description}>
              <h1 className={s.title}>
                {movie.title}
                <span>
                  ({movie.release_date && movie.release_date.slice(0, 4)})
                </span>
              </h1>
              <h2>Overview : </h2>
              <p>{movie.overview}</p>
              <h3>
                Genres:{' '}
                {movie.genres &&
                  movie.genres.map(genre => (
                    <span className={s.genre} key={genre.id}>
                      {genre.name}
                    </span>
                  ))}
              </h3>
            </div>
          </section>

          <div className={s.extraInfo}>
            <h4>Additional information</h4>
            <nav>
              <NavLink to={`/movies/${movieId}/cast`} className={setActive}>
                Cast
              </NavLink>
              <NavLink to={`/movies/${movieId}/reviews`} className={setActive}>
                Reviews
              </NavLink>
            </nav>
          </div>

          <Outlet />
        </div>
      )}
    </>
  );
}
