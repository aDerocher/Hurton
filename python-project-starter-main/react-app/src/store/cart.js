// =========== Constants ========================
const GET_CART = 'session/GET_CART';
const ADD_TO_CART = 'session/ADD_TO_CART';
// const DELETE_FROM_CART = 'session/DELETE_FROM_CART';
// const DELETE_ALL_FROM_CART = 'session/DELETE_ALL_FROM_CART';

const getCartContents = (cart_items) => ({
  type: GET_CART,
  payload: cart_items
});
const addOneToCart = (cart_item) => ({
  type: ADD_TO_CART,
  payload: cart_item
})
// const removeOneFromCart = (cart_item) => ({
//   type: DELETE_FROM_CART,
//   payload: cart_item
// })
// const removeAllFromCart = () => ({
//   type: DELETE_ALL_FROM_CART,
// })



// =========== Thunk ========================
export const getCartItems = (user_id) => async (dispatch) => {
    const response = await fetch(`/api/users/${user_id}/cart`, {
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
        const cart_items = data.cart_items
        dispatch(getCartContents(cart_items));
        return response;
    }
}

export const addToCart = (data) => async (dispatch) => {
    const {user_id, item_id, item_name, item_color, item_size, item_price, quantity } = data;
    let formData = new FormData();

    formData.append("user_id", user_id);
    formData.append("item_id", item_id);
    formData.append("item_name", item_name);
    formData.append("item_color", item_color);
    formData.append("item_size", item_size);
    formData.append("item_price", item_price);
    formData.append("quantity", quantity);
    const response = await fetch(`/api/carts/add-item`, {
        method: 'POST',
        body: formData
    });
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return `Error adding item '${item_name}' to cart`;
      }
      const item = data.item
      dispatch(addOneToCart(item));
    }
  }


// =========== Reduce ========================
const initialState = [];

export default function reducer(state = initialState, action) {
    let newState = [ ...state ]
    switch (action.type) {
      case GET_CART:
        return [ ...action.payload ]
      case ADD_TO_CART:
         return [ ...newState, action.payload ]
        // case DELETE_FROM_CART:
        //      // need to run a filter and remove the item that matches the payload
        //     return [ ...action.payload]
        // case DELETE_ALL_FROM_CART:
        //     return [ ...action.payload]
        default:
            return state;
    }
}