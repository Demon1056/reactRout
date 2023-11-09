import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout/Layout';
import { NotFound } from 'pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Casts = lazy(() => import('./Casts/Casts'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Casts />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
