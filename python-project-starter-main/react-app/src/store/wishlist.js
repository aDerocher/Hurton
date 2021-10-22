// =========== Constants ========================
const GET_WISHLIST = 'session/GET_WISHLIST';
const ADD_TO_WISHLIST = 'session/ADD_TO_WISHLIST';
const DELETE_FROM_WISHLIST = 'session/DELETE_FROM_WISHLIST';

const getWishlist = (wishlist_items) => ({
  type: GET_WISHLIST,
  payload: wishlist_items
});
const addOneToWishlist = (wishlist_item) => ({
  type: ADD_TO_WISHLIST,
  payload: wishlist_item
})
const removeFromWishlist = (wishlist_item) => ({
  type: DELETE_FROM_WISHLIST,
  payload: wishlist_item
})



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
    const {user_id, item_id, item_name, item_color, item_price, item_size } = data;
    let formData = new FormData();

    formData.append("user_id", user_id);
    formData.append("item_id", item_id);
    formData.append("item_name", item_name);
    formData.append("item_color", item_color);
    formData.append("item_size", item_size);
    formData.append("item_price", item_price);
    const response = await fetch(`/api/wishlists/add-item`, {
        method: 'POST',
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

export const deleteWishlistItem = (wl_item_id) => async (dispatch) => {
    const response = await fetch(`/api/wishlists/${wl_item_id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return `Error adding item to wishlist`;
        }
        const wishlist_item = data.wishlist_item
        dispatch(removeFromWishlist(wishlist_item));
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
            return [ ...newState, ...action.payload ]
        case DELETE_FROM_WISHLIST:
             // need to run a filter and remove the item that matches the payload
             return newState.filter((el) => action.payload.id !== el.id)
        default:
            return state;
    }
}