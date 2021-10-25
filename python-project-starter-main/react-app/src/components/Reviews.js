import React, { useEffect, useState }from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getItemReviews } from '../store/items';
import { editReview, deleteReview } from './../store/reviews'
import './../styles/reviews.css'


const Reviews = (revData) => {
    const params = useParams()
    const dispatch = useDispatch()
    const review = revData.review
    const user = revData.user
    const itemId = parseInt(params.itemId)
    
    const [editHidden, setEditHidden] = useState(true)
    const [revRating, setRevRating] = useState(review?.rating)
    const [revTitle, setRevTitle] = useState(review?.title)
    const [revContent, setRevContent] = useState(review?.content)

    const handleRevEdit = (e) => {
        e.preventDefault()
        const formData = {
            review_id: review.id,
            item_id: itemId,
            rating: revRating,
            title: revTitle,
            content: revContent
        }
        dispatch(editReview(formData))
        setEditHidden(!editHidden)
    }

    const handleRevDelete = (e) => {
        e.preventDefault()
        dispatch(deleteReview(review.id, itemId))
    }

    return (
        <div className="reviews-container">
            <p>This is the review content</p>
            {review?.title && 
            <div hidden={!editHidden}>
                <h5>review id: {review.id}</h5>
                <p>review item_id: {review.item_id}</p>
                <p>title: {review.title}</p>
                <p>user: {review.user_id}</p>
                <p>rating: {review.rating}</p>
                <p>content: {review.content}</p>
                {user?.id === review.user_id &&
                    <div className='review-option-buttons'>
                        <button onClick={e=> setEditHidden(!editHidden)}>Edit Review</button>
                        <button onClick={e=>handleRevDelete(e)}>Delete</button>
                    </div>
                }
            </div>
            }
                <div hidden={editHidden} >

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
                        <button onClick={e=>handleRevEdit(e)}>Submit</button>
                    </form>
                    <button onClick={e=> setEditHidden(!editHidden)}>Cancel</button>
                </div>
        </div>
    );
}

export default Reviews;