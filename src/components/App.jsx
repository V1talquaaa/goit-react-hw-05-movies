
import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Home from '../pages/Home';
import Movies from 'pages/Moviews';
import MoviesDetail from './MoviesDetail/MoviesDetail';


export const App = () => {
  const Cast = lazy(() => import("./Cast/Cast"))
  const Reviews = lazy(() => import("./Reviews/Reviews"))


  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:moviesId" element={<MoviesDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  );
};
