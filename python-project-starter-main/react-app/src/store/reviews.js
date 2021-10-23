// =========== Constants ========================

const ITEM_REVIEWS = 'session/ITEM_REVIEWS';

const setItemsReviews = (reviews) => ({
  type: ITEM_REVIEWS,
  payload: reviews
})

// ================== Thunk =====================================

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


// =========== Reducer ========================
const initialState = [];

export default function reducer(state = initialState, action) {
    let newState = [ ...state ]
    switch (action.type) {
        case ITEM_REVIEWS:
            return action.payload
        default:
            return state;
    }
}