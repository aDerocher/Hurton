import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewReview } from '../store/reviews';

import './../styles/reviews.css'


const NewReview = (data) => {
    const dispatch = useDispatch()
    const user = data.user
    const itemId = data.itemId

    const [revTitle, setRevTitle] = useState('')
    const [revContent, setRevContent] = useState('')
    const [revRating, setRevRating] = useState(5)

    const handleReviewSubmit = (e) => {
        e.preventDefault()
        const formData = {
            item_id: itemId,
            user_id: user.id,
            rating: revRating,
            title: revTitle,
            content: revContent
        }
        dispatch(addNewReview(formData))
    }

    return (
        <div className="reviews-container">
            <form action={`/items/${itemId}/new-review`}>
                <h5> - leave a review - </h5>
                <div>
                    <span className='req-star'>*</span><label className='grey-label'>Score</label>
                    <input type='number'
                    value={revRating}
                    onChange={e=> setRevRating(e.target.value)}
                    min='1' max='5'
                    ></input>
                </div>
                <div>
                    <span className='req-star'>*</span><label className='grey-label'>Title</label>
                    <input type='text'
                        value={revTitle}
                        onChange={e=> setRevTitle(e.target.value)}
                        maxLength='49'
                    ></input> 
                </div>
                <div>
                    <span className='req-star'>*</span><label className='grey-label'>Review</label>
                    <textarea type='text'
                        value={revContent}
                        onChange={e=> setRevContent(e.target.value)}
                        maxLength='399'
                        rows="7" cols="65"
                    ></textarea>
                </div>
                <button onClick={e=>handleReviewSubmit(e)}>Submit</button>
            </form>
        </div>
    );
}

export default NewReview;