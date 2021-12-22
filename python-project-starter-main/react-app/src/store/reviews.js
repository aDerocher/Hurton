// =========== Constants ========================

const ITEM_REVIEWS = 'session/ITEM_REVIEWS';
const NEW_REVIEW = 'session/NEW_REVIEW'
const EDIT_REVIEW = 'session/EDIT_REVIEW'
const REMOVE_REVIEW = 'session/REMOVE_REVIEW'

const setItemsReviews = (reviews) => ({
  type: ITEM_REVIEWS,
  payload: reviews
})
const addToReviewsList = (new_review) => ({
  type: NEW_REVIEW,
  payload: new_review
})
const editedReview = (review) => ({
  type: EDIT_REVIEW,
  payload: review
})
const removeReview = (dead_review) => ({
  type: REMOVE_REVIEW,
  payload: dead_review
})

// ================== Thunk =====================================

// get all the reviews for a given item ===========================================
export const getItemReviews = (item_id) => async (dispatch) => {
    const response = await fetch(`/api/items/${item_id}/reviews`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return `Error fetching reviews for item ${item_id}`;
      }
      const reviews = data.reviews
      dispatch(setItemsReviews(reviews));
    }
}

export const getUserReviews = (user_id) => async (dispatch) => {
    const response = await fetch(`/api/users/${user_id}/reviews`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return `Error fetching reviews for user ${user_id}`;
      }
      const reviews = data.reviews
      dispatch(setItemsReviews(reviews));
    }
}

// create a new review ===========================================
export const addNewReview = (data) => async (dispatch) => {
    const {user_id, item_id, rating, content, title } = data;
    let formData = new FormData();
    formData.append("item_id", item_id);
    formData.append("user_id", user_id);
    formData.append("rating", rating);
    formData.append("title", title);
    formData.append("content", content);
    
    const response = await fetch(`/api/items/${item_id}/new-review`, {
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return `Error creating review`;
        }
        const new_review = data.new_review
        dispatch(addToReviewsList(new_review));
    }
}


// edit a review ===========================================
export const editReview = (data) => async (dispatch) => {
    const {review_id, item_id, rating, title, content } = data;
    let formData = new FormData();
    formData.append("rating", rating);
    formData.append("title", title);
    formData.append("content", content);
    // formData.append("updated_at", new Date());
    
    const response = await fetch(`/api/items/${item_id}/reviews/${review_id}`, {
        method: 'PATCH',
        body: formData
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return `Error editing a review`;
        }
        const review = data.review
        dispatch(editedReview(review));
    }
}


// delete a review ===========================================
export const deleteReview = (review_id, item_id) => async (dispatch) => {
    const response = await fetch(`/api/items/${item_id}/reviews/${review_id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return `Error deleting review`;
        }
        const dead_review = data.dead_review
        dispatch(removeReview(dead_review));
    }
}


// =========== Reducer ========================
const initialState = [];

export default function reducer(state = initialState, action) {
    let newState = [ ...state ]
    switch (action.type) {
        case ITEM_REVIEWS:
            return action.payload
        case NEW_REVIEW:
            return [...newState, action.payload]
        case EDIT_REVIEW:
            let editedState = newState.filter((review) => {
                return review.id !== action.payload.id
            })
            return [ ...editedState, action.payload ]
        case REMOVE_REVIEW:
            let deletedState = newState.filter((review) => {
                return review.id !== action.payload.id
            })
            return [ ...deletedState ]
        default:
            return state;
    }
}