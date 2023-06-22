import {getReviewById} from "Services/getFilms"
import { useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [review, setReview] = useState([])
    const { moviesId } = useParams();

    try {
        getReviewById(moviesId).then((data) => setReview(data.results))
        if(review.length === 0) {
            return <p>Oops, we don`t have any reviews</p>
        }
    } catch (error) {
        console.error('data not fetched')
    }


    return <ul>
         {review.map(({author, content, id}) => {
            return <li key={id}>
                <b><p>Author: {author}</p></b>
                <p>{content}</p>
            </li>
        })}
    </ul>
}

export default Reviews