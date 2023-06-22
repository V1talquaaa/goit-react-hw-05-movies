import { getFilms } from "Services/getFilms";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Home = () => {
    const [films, setFilms] = useState([])
// Якщо треба зробити http запит використовуємо componentDidMount, він же useEffect на хуках
useEffect(() => {
    getFilms().then(fetchedFilms => setFilms(fetchedFilms.results))
}, [])
    return <div>
        <h2>Trending today</h2>
        <ul>
            {films.map(({title, id}) => {
                return <li key={id}><NavLink to={`movies/${id}`}>{title}</NavLink></li>
            })}
        </ul>
    </div>
}





export default Home;