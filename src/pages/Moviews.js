import { getFilmByQuery } from "Services/getFilms";
import { useState } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
const [filmsByQuery, setfilmsByQuery] = useState([])
const [query, setQuery] = useState('')
const [, setSearchParams] = useSearchParams()
const location = useLocation();


const handleQuery = (e) => {
  setQuery(e.target.value);
}

  const onSubmitForm = (e) => {
    e.preventDefault();
    setSearchParams({query: query})
    query&&
    getFilmByQuery(query).then(data => setfilmsByQuery(data.results))
  };

  return (
    <>
    <form type="submit" onSubmit={onSubmitForm}>
      <input type="input" onChange={handleQuery} value={query}></input>
      
    <button type="submit">Search</button>
    </form>
    <ul>
    {filmsByQuery.map(({title, id}) => {
        return <li key={id}><NavLink to={`${id}`} state={{from: location}}>{title}</NavLink></li>
    })}
    </ul>
    </>
  );
};

export default Movies;
