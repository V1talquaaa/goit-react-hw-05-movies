import { getFilmById } from 'Services/getFilms';
import Title from 'components/Title/Title';
import { NavLink,  useLocation, useParams, Link, Outlet } from 'react-router-dom';
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
  <Link to={backToLocation.current}><button className={css.button}>Go back</button></Link>
 
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
          <ul className={css.addSectionList}>
            <NavLink to="cast" className={css.additionalSectionLink}><li>Cast</li></NavLink>
            <NavLink to="reviews"className={css.additionalSectionLink}><li>Reviews</li></NavLink>
          </ul>
          <Outlet />
    </div>      
  </>
};

export default MoviesDetail;

