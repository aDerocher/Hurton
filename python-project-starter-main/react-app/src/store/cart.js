// =========== Constants ========================
const GET_CART = 'session/GET_CART';
// const ADD_TO_CART = 'session/ADD_TO_CART';
// const DELETE_FROM_CART = 'session/DELETE_FROM_CART';
// const DELETE_ALL_FROM_CART = 'session/DELETE_ALL_FROM_CART';

const getCartContents = (cart_items) => ({
  type: GET_CART,
  payload: cart_items
});

// const addOneToCart = (cart_item) => ({
//   type: ADD_TO_CART,
//   payload: cart_item
// })
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


// export const getOneItem = (item_id) => async (dispatch) => {
//     const response = await fetch(`/api/items/${item_id}`, {
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     if (response.ok) {
//       const data = await response.json();
//       if (data.errors) {
//         return `Error fetching item ${item_id}`;
//       }
//       const item = data.item
//       dispatch(oneItem(item));
//     }
//   }


// =========== Reduce ========================
const initialState = [];

export default function reducer(state = initialState, action) {
    let newState = [ ...state ]
    switch (action.type) {
      case GET_CART:
        return [ ...action.payload ]
    //   case ADD_TO_CART:
    //      return [ ...newState.concat, action.payload ]
        // case DELETE_FROM_CART:
        //      // need to run a filter and remove the item that matches the payload
        //     return [ ...action.payload]
        // case DELETE_ALL_FROM_CART:
        //     return [ ...action.payload]
        default:
            return state;
    }
}