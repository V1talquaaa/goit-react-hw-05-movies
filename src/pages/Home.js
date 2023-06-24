import { getFilms } from 'Services/getFilms';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Pages.module.css'

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms().then(fetchedFilms => setFilms(fetchedFilms.results));
  }, []);

  return (
    <div>
      <h2 className={css.homeTitle}>Trending today</h2>
      <ul className={css.filmsList}>
        {films.map(({ title, id, poster_path, vote_average }) => {
          return (
            <Link to={`movies/${id}`} className={css.filmsLinks}>
              <li key={id} className={css.filmsListItem}> 
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                ></img>
                <p className={css.filmListTitle}>{title}</p>
                <p className={css.filmListRating}>Rating: {vote_average.toFixed(2)}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
