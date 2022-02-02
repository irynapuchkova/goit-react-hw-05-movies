import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { fetchMovieByTitle } from '../../API/fetchMovieInformation';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function MoviesView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    (async function () {
      try {
        const { results } = await fetchMovieByTitle(1, searchQuery);
        if (results) {
          setMovies(results);
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [searchQuery]);

  const onSearchBarSubmit = value => {
    navigate({ ...location, search: `?query=${value}` });
  };

  return (
    <div>
      <SearchBar onSubmit={onSearchBarSubmit} />
      {movies && <MoviesList movies={movies} location={location} />}
    </div>
  );
}
