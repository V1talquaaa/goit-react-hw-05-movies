import { getFilmByQuery } from 'Services/getFilms';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Pages.module.css'

const Movies = () => {
  const [filmsByQuery, setfilmsByQuery] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    getFilmByQuery(query).then(data => setfilmsByQuery(data.results));
  }, [query, searchParams]);

  const handleQuery = e => {
    setQuery(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ query: query });
  };

  return (
    <>
      <form type="submit" onSubmit={onSubmitForm} className={css.form}>
        <input type="input" onChange={handleQuery} value={query}></input>

        <button type="submit">Search</button>
      </form>
      <ul className={css.filmsList}>
        {filmsByQuery.map(({ title, id, poster_path, vote_average }) => {
          return (
            <Link to={`${id}`} state={{ from: location }} className={css.filmsLinks}>
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
    </>
  );
};

export default Movies;
