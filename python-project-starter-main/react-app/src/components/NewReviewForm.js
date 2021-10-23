import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './../styles/reviews.css'


const NewReviewForm = (userData) => {
    const user = userData.user
    // console.log(user)

    return (
        <div className="reviews-container">
            <div>
                <h5> - leave a review - </h5>
                <input type='text'></input>
                <input type='text'></input>
                <input type='text'></input>
                <input type='text'></input>
            </div>
        </div>
    );
}

export default NewReviewForm;