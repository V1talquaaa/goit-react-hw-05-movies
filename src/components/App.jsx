import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Home from '../pages/Home';
import Movies from 'pages/Moviews';
import MoviesDetail from './MoviesDetail/MoviesDetail';
import { Layout } from 'Layout/Layout';

export const App = () => {
  const Cast = lazy(() => import('./Cast/Cast'));
  const Reviews = lazy(() => import('./Reviews/Reviews'));
  // const Movies = lazy(() => import("../pages/Moviews"))
  // const MoviesDetail = lazy(() => import("./MoviesDetail/MoviesDetail"))

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MoviesDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<p>Not Found</p>} />
        </Route>
      </Routes>
    </div>
  );
};
