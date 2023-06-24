import { getCastById } from "Services/getFilms"
import { useState } from "react";
import { useParams } from "react-router-dom";
import css from './Cast.module.css'

const Cast = () => {
    const [cast, setCast] = useState([])
    const { moviesId } = useParams();

    try {
        getCastById(moviesId).then((data) => setCast(data.cast))
    } catch (error) {
        console.error('data not fetched')
    }
 
    return <ul>
        {cast.map(({name, character, profile_path, id}) => {
            return <li key={id} class={css.castItem}>
                <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} className={css.castImage}></img>
                <p>{name}</p>
                <p>Character: {character}</p>
            </li>

        })}
        </ul>
}

export default Cast