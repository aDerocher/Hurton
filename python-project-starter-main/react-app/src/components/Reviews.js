import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getCartItems, addToCart, editCartItem } from '../../store/cart';
import { getUsersWishlist, addWishlistItem } from '../../store/wishlist';
// import { useParams } from 'react-router';
import { getOneItem } from './../../store/items';
import './../styles/reviews.css'


const Reviews = (itemId, userId) => {
    const dispatch = useDispatch()

    const reviews = useSelector(state => state.reviews)

    useEffect(()=>{
        dispatch(getProductReviews(itemId))
    }, dispatch)

    return (
        <div className="all-reviews-container">
            <div className="reviews-container">
                {/* <div className="new-review-form">
                    <form>
                        <p>rev rating</p>
                        <input type='number'></input>
                        <p>rev title</p>
                        <input type='text'></input>
                    </form>
                    <button onClick={e=>submitReview(e)}>Submit Review</button> 
                </div>*/}
                <h1>This is one Review</h1>
                <div>
                    <p>This is the review content</p>
                </div>
            </div>
        </div>
    );
}

export default Reviews;