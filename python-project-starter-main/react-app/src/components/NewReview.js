import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewReview } from "../store/reviews";
import "./../styles/reviews.css";

const NewReview = (data) => {
  const dispatch = useDispatch();
  const user = data.user;
  const itemId = data.itemId;

  const [revErrors, setRevErrors] = useState([]);
  const [hideRevErrors, setHideRevErrors] = useState(true);
  const [revTitle, setRevTitle] = useState("");
  const [revContent, setRevContent] = useState("");
  const [revRating, setRevRating] = useState(5);

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
    setRevErrors(newErrors);
  }, [dispatch, revRating, revTitle, revContent]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (revErrors.length <= 0) {
      const formData = {
        item_id: itemId,
        user_firstName: user.firstName,
        user_id: user.id,
        rating: revRating,
        title: revTitle,
        content: revContent,
      };
      dispatch(addNewReview(formData));
    } else {
      setHideRevErrors(false);
    }
  };
  if (!data.userCanReview) return <></>;

  return (
    <div className="review-container">
      <form action={`/items/${itemId}/new-review`}>
        <h4 className="new-rev-title bold-accent"> Leave a Review </h4>
        {revErrors.map((e, i) => (
          <p hidden={hideRevErrors} className="error" key={i}>
            {e}
          </p>
        ))}
        <div className="flex-col-cont">
          <label className="grey-label">
            <span hidden={hideRevErrors} className="req-star">
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
            <span hidden={hideRevErrors} className="req-star">
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
            <span hidden={hideRevErrors} className="req-star">
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
        <div className="review-option-buttons flex-row-cont">
          <button
            className="grey-green-btn"
            onClick={(e) => handleReviewSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewReview;
