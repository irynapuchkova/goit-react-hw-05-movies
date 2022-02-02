import { useEffect, useState } from 'react';

import { fetchTrendingMovieDay } from '../../API/fetchMovieInformation';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function HomeView() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const { results } = await fetchTrendingMovieDay(1);
        if (results) {
          setTrendingMovies(results);
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trendingMovies && <MoviesList movies={trendingMovies} />}
    </>
  );
}
