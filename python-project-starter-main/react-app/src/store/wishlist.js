// =========== Constants ========================
const GET_WISHLIST = 'session/GET_WISHLIST';
const ADD_TO_WISHLIST = 'session/ADD_TO_WISHLIST';
// const DELETE_FROM_WISHLIST = 'session/DELETE_FROM_WISHLIST';
// const DELETE_ALL_FROM_WISHLIST = 'session/DELETE_ALL_FROM_WISHLIST';

const getWishlist = (wishlist_items) => ({
  type: GET_WISHLIST,
  payload: wishlist_items
});
const addOneToWishlist = (wishlist_item) => ({
  type: ADD_TO_WISHLIST,
  payload: wishlist_item
})

// const removeOneFromWishlist = (wishlist_item) => ({
//   type: DELETE_FROM_WISHLIST,
//   payload: wishlist_item
// })
// const removeAllFromWishlist = () => ({
//   type: DELETE_ALL_FROM_WISHLIST,
// })


// =========== Thunk ========================
export const getUsersWishlist = (user_id) => async (dispatch) => {
    const response = await fetch(`/api/wishlists/${user_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return `Error fetching cart contents`;
        }
        const wishlist_items = data.wishlist_items
        dispatch(getWishlist(wishlist_items));
        return response;
    }
}


export const addWishlistItem = (data) => async (dispatch) => {
    const {user_id, item_id, item_color, item_size } = data;
    const formData = new FormData();

    formData.append("user_id", user_id);
    formData.append("item_id", item_id);
    formData.append("item_color", item_color);
    formData.append("item_size", item_size);

    const response = await fetch(`/api/wishlists/add-item`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: formData
    });
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return `Error adding item to wishlist`;
      }
      const wishlist_item = data.wishlist_item
      dispatch(addOneToWishlist(wishlist_item));
    }
  }


// =========== Reduce ========================
const initialState = [];

export default function reducer(state = initialState, action) {
    let newState = [ ...state ]
    switch (action.type) {
        case GET_WISHLIST:
            return [ ...action.payload ]
        case ADD_TO_WISHLIST:
            return [ ...newState.concat, action.payload ]
        // case DELETE_FROM_WISHLIST:
        //      // need to run a filter and remove the item that matches the payload
        //     return [ ...action.payload]
        // case DELETE_ALL_FROM_WISHLIST:
        //     return [ ...action.payload]
        default:
            return state;
    }
}