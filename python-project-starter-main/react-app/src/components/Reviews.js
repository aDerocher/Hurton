import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteReview } from './../store/reviews'
import { getOneItem } from './../store/items'
import './../styles/reviews.css'


const Reviews = (revData) => {
    const params = useParams()
    const dispatch = useDispatch()
    const review = revData.review
    const user = revData.user
    const itemId = parseInt(params.itemId)
    
    // const handleRevEdit = (e) => {
    //     e.preventDefault()
    //     dispatch(editReview)
    // }
    const handleRevDelete = (e) => {
        e.preventDefault()
        dispatch(deleteReview(review.id, itemId))
    }

    return (
        <div className="reviews-container">
            <p>This is the review content</p>
            <div>
                <h5>review id: {review.id}</h5>
                <p>review item_id: {review.item_id}</p>
                <p>title: {review.title}</p>
                <p>user: {review.user_id}</p>
                <p>rating: {review.rating}</p>
                <p>content: {review.content}</p>
                {user?.id === review.user_id &&
                    <div className='review-option-buttons'>
                        {/* <button onClick={e=>handleRevEdit(e)}>Edit Review</button> */}
                        <button onClick={e=>handleRevDelete(e)}>Delete</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default Reviews;