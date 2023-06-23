import { getFilmByQuery } from "Services/getFilms";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
const [filmsByQuery, setfilmsByQuery] = useState([])
const [query, setQuery] = useState('')
const [searchParams, setSearchParams] = useSearchParams()
const location = useLocation();

useEffect(() => {
  const query = searchParams.get('query')
  if(!query) return
  getFilmByQuery(query).then(data => setfilmsByQuery(data.results))

}, [query, searchParams])



const handleQuery = (e) => {
  setQuery(e.target.value);
}

  const onSubmitForm = (e) => {
    e.preventDefault();
    setSearchParams({query: query})
    
  };

  return (
    <>
    <form type="submit" onSubmit={onSubmitForm}>
      <input type="input" onChange={handleQuery} value={query}></input>
      
    <button type="submit">Search</button>
    </form>
    <ul >
    {filmsByQuery.map(({title, id}) => {
        return <li key={id} ><Link to={`${id}`} state={{from: location}}>{title}</Link></li>
    })}
    </ul>
    </>
  );
};



export default Movies;
