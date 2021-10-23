import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItemReviews } from './../store/reviews'
import { getOneItem } from './../store/items'
import './../styles/reviews.css'


const Reviews = (revData) => {
    const review = revData.review
    // console.log(review)

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
            </div>
        </div>
    );
}

export default Reviews;