import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

const HomeView = lazy(() =>
  import('../../views/HomeView/HomeView' /* webpackChunkName: 'home-view'*/),
);
const MoviesView = lazy(() =>
  import(
    '../../views/MoviesView/MoviesView' /* webpackChunkName: 'movies-view'*/
  ),
);
const MovieDetailsView = lazy(() =>
  import(
    '../../views/MovieDetailsView/MovieDetailsView' /* webpackChunkName: 'movieDetails-view'*/
  ),
);
const CastView = lazy(() =>
  import('../../views/CastView/CastView' /* webpackChunkName: 'cast-view'*/),
);
const ReviewsView = lazy(() =>
  import(
    '../../views/ReviewsView/ReviewsView' /* webpackChunkName: 'reviews-view'*/
  ),
);

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId/" element={<MovieDetailsView />}>
            <Route path="cast" element={<CastView />} />
            <Route path="reviews" element={<ReviewsView />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
