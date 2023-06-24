import {getReviewById} from "Services/getFilms"
import { useState } from "react";
import { useParams } from "react-router-dom";
import css from './Reviews.module.css'

const Reviews = () => {
    const [review, setReview] = useState([])
    const { moviesId } = useParams();

    try {
        getReviewById(moviesId).then((data) => setReview(data.results))
        if(review.length === 0) {
            return <p className={css.reviewItemAuthor}>Oops, we don`t have any reviews</p>
        }
    } catch (error) {
        console.error('data not fetched')
    }


    return <ul>
         {review.map(({author, content, id}) => {
            return <li key={id} className={css.reviewItem}>
                <b><p className={css.reviewItemAuthor}>Author: {author}</p></b>
                <p className={css.reviewItemContent}>{content}</p>
            </li>
        })}
    </ul>
}

export default Reviews