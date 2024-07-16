import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editReview, deleteReview } from "./../store/reviews";
// import { format } from "date-fns";
import "./../styles/reviews.css";

const Reviews = (revData) => {
  const params = useParams();
  const dispatch = useDispatch();
  const review = revData.review;
  const user = revData.user;
  const itemId = parseInt(params.itemId);
  const five = [1, 2, 3, 4, 5];

  const [editHidden, setEditHidden] = useState(true);
  const [hideRevEditErrors, setHideRevEditErrors] = useState(true);
  const [revRating, setRevRating] = useState(review?.rating);
  const [revTitle, setRevTitle] = useState(review?.title);
  const [revContent, setRevContent] = useState(review?.content);
  const [revEditErrors, setRevEditErrors] = useState([]);

  useEffect(() => {
    let newErrors = [];
    if (revRating > 5 || revRating < 1)
      newErrors.push("Rating must be between 1 and 5");
    if (revTitle.length < 2)
      newErrors.push("Review title must be at least 2 characters");
    if (revTitle.length > 50)
      newErrors.push("Review title can not exceed 50 characters");
    if (revContent.length < 2)
      newErrors.push("Review title must be at least 2 characters");
    if (revContent.length > 400)
      newErrors.push("Review title can not exceed 400 characters");
    setRevEditErrors(newErrors);
  }, [dispatch, revRating, revTitle, revContent]);

  const handleRevEdit = (e) => {
    e.preventDefault();

    if (revEditErrors.length <= 0) {
      const formData = {
        review_id: review.id,
        item_id: itemId,
        rating: revRating,
        title: revTitle,
        content: revContent,
      };
      dispatch(editReview(formData));
      setEditHidden(!editHidden);
    } else {
      setHideRevEditErrors(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEditHidden(!editHidden);
    setHideRevEditErrors(true);
    setRevRating(review?.rating);
    setRevTitle(review?.title);
    setRevContent(review?.content);
    setRevEditErrors([]);
  };

  const handleRevDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReview(review.id, itemId));
  };

  return (
    <div className="review-container">
      {review?.title && (
        <div hidden={!editHidden}>
          <div className="rev-info-cont flex-row-cont pad-1">
            <div className="rev-info-left flex-row-cont ">
              <div className="rev-user-circle flex-row-cont">
                <p>{review.user_id}</p>
              </div>
              <div className="rev-name-stars">
                <p>Anonymous Verified Buyer</p>
                <div className="stars-row flex-row-cont">
                  {five.map((n, i) => (
                    <div key={i} className="">
                      {n <= review.rating && <i className="fas fa-star"></i>}
                      {n > review.rating && <i className="far fa-star"></i>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <p>{format((new Date('Tue, 26 Oct 2021 22:53:47 GMT')), 'MM/dd/yy')}</p> */}
          </div>
          <div className="pad-1">
            <p className="rev-title">{review.title}</p>
            <p className="rev-content">{review.content}</p>
          </div>
          {user?.id === review.user_id && (
            <div className="review-option-buttons flex-row-cont">
              <button
                className="grey-green-btn"
                onClick={(e) => setEditHidden(!editHidden)}
              >
                Edit Review
              </button>
              <button className="" onClick={(e) => handleRevDelete(e)}>
                Delete
              </button>
            </div>
          )}
        </div>
      )}
      {/* The attempted copy */}
      <div className="review-container" hidden={editHidden}>
        <form action={`/items/${itemId}/new-review`} method="patch">
          <h4 className="new-rev-title bold-accent"> Edit Review </h4>
          {revEditErrors.map((e, i) => (
            <p hidden={hideRevEditErrors} className="error" key={i}>
              {e}
            </p>
          ))}
          <div className="flex-col-cont">
            <label className="grey-label">
              <span hidden={hideRevEditErrors} className="req-star">
                {" "}
                *
              </span>{" "}
              Score
            </label>
            <input
              type="number"
              className="rev-input rev-rating-num"
              value={revRating}
              onChange={(e) => setRevRating(e.target.value)}
              min="1"
              max="5"
            ></input>
          </div>
          <div className="flex-col-cont">
            <label className="grey-label">
              <span hidden={hideRevEditErrors} className="req-star">
                {" "}
                *
              </span>{" "}
              Title
            </label>
            <input
              type="text"
              className="rev-input"
              value={revTitle}
              onChange={(e) => setRevTitle(e.target.value)}
              maxLength="49"
            ></input>
          </div>
          <div className="flex-col-cont">
            <label className="grey-label">
              <span hidden={hideRevEditErrors} className="req-star">
                {" "}
                *
              </span>{" "}
              Review
            </label>
            <textarea
              type="text"
              className="rev-input"
              value={revContent}
              onChange={(e) => setRevContent(e.target.value)}
              maxLength="399"
              rows="7"
              cols="65"
            ></textarea>
          </div>
        </form>
        <div className="review-option-buttons flex-row-cont">
          <button className="grey-green-btn" onClick={(e) => handleRevEdit(e)}>
            Submit
          </button>
          <button onClick={(e) => handleCancel(e)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
