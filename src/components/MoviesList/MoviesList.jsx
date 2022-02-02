import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies, location }) {
  return (
    <ul>
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
  location: PropTypes.shape(PropTypes.node),
};
