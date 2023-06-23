import { getFilmById } from 'Services/getFilms';
import Title from 'components/Title/Title';
import { NavLink, Routes, useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import css from './MoviesDetail.module.css'

const MoviesDetail = () => {
  
const [movie, setMovie] = useState([]);
    const { moviesId } = useParams();
    const location = useLocation();
    const backToLocation = useRef(location.state?.from || "/");

  useEffect(() => {
    try {
        getFilmById(moviesId).then(data => setMovie([data]));
    } catch (error) {
        console.error('error happened')
    }
    
  }, [moviesId])

  if(!movie) return;

  return <>
  <Link to={backToLocation.current}>Go back</Link>
  <div key={moviesId}>
    {movie.map(
    ({
      title,
      overview,
      poster_path,
      vote_average,
      genres,
    }) => {
      return (
          <div key={moviesId} className={css.movieWrapper}>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}></img>
          <div className={css.filmInfo}>
          <Title title={title}></Title>
          <p>User Score: {(vote_average * 100 / 10).toFixed(0)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3 className={css.genresTitle}>Genres</h3>
          <div className={css.genreItem}>
          {genres.map((genre) => {
            return <p key={genre.id}>{genre.name}</p>
          })}
        </div> 
          </div>
 </div>
      )
    }
  )}
  </div>
  <div className={css.castReviewsSection}>
          <Title title={"Additional information"}></Title>
          <ul>
            <NavLink to="cast"><li>Cast</li></NavLink>
            <NavLink to="reviews"><li>Reviews</li></NavLink>
          </ul>
    </div>
          {/* <Routes>
          <Route path="cast" moviesId={moviesId} element={<Cast />}></Route>
          <Route path="reviews" moviesId={moviesId} element={<Reviews />}></Route>
          </Routes> */}
          
  </>
};

export default MoviesDetail;

