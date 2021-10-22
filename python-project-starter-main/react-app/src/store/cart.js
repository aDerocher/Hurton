// =========== Constants ========================
const GET_CART = 'session/GET_CART';
const ADD_TO_CART = 'session/ADD_TO_CART';
const EDIT_CART = 'session/EDIT_CART';
const DELETE_ONE_FROM_CART = 'session/DELETE_ONE_FROM_CART';
// const DELETE_ALL_FROM_CART = 'session/DELETE_ALL_FROM_CART';


const getCartContents = (cart_items) => ({
  type: GET_CART,
  payload: cart_items
});

const addOneToCart = (cart_item) => ({
  type: ADD_TO_CART,
  payload: cart_item
})

const deleteOneFromCart = (cart_item) => ({
  type: DELETE_ONE_FROM_CART,
  payload: cart_item
})

const editCart = (cart_item) => ({
    type: EDIT_CART,
    payload: cart_item
})
// const removeAllFromCart = () => ({
//   type: DELETE_ALL_FROM_CART,
// })



// =========== Thunk ========================
export const getCartItems = (user_id) => async (dispatch) => {
    if (!user_id) {
        console.log('Warning: No user id provided to "getCartItems()"')
        return
    }
    const response = await fetch(`/api/users/${user_id}/cart`, {
        method: 'GET',
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return `Error fetching cart contents`;
        }
        const cart_items = data.cart_items
        console.log(cart_items, '===========================================')
        dispatch(getCartContents(cart_items));
        return response;
    }
}
// =========== Thunk ========================
// export const getOrderHistory = (user_id) => async (dispatch) => {
//     if (!user_id) {
//         console.log('Warning: order history requires user"')
//         return
//     }
//     const response = await fetch(`/api/users/${user_id}/order-history`, {
//         method: 'GET',
//     });
//     if (response.ok) {
//         const data = await response.json();
//         if (data.errors) {
//             return `Error fetching order history`;
//         }
//         const past_items = data.past_items
//         dispatch(getCartContents(past_items));
//         return response;
//     }
// }

// add an item to the cart ==============================================
export const addToCart = (data) => async (dispatch) => {
    // create the form from the data provided
    const { item_id, item_name, item_color, item_size, item_price, quantity, item_image } = data;
    let formData = new FormData();
    formData.append("item_id", item_id);
    formData.append("item_name", item_name);
    formData.append("item_color", item_color);
    formData.append("item_size", item_size);
    formData.append("item_price", item_price);
    formData.append("item_image", item_image);
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
        const cart_item = data.cart_item
        dispatch(addOneToCart(cart_item));
    }
}
// edit an item in the cart by increasing quantity ===========================
export const editCartItem = (cartItem_id, newQuantity) => async (dispatch) => {
    // create the form from the data provided
    // const { item_id, item_name, item_color, item_size, item_price, quantity } = data;
    let formData = new FormData();
    // formData.append("item_id", item_id);
    // formData.append("item_name", item_name);
    // formData.append("item_color", item_color);
    // formData.append("item_size", item_size);
    // formData.append("item_price", item_price);
    formData.append("quantity", newQuantity);

    const response = await fetch(`/api/carts/${cartItem_id}`, {
        method: 'PATCH',
        body: formData
    });
    if (response.ok) {
         const data = await response.json();
        if (data.errors) {
            return `Error editing car item '${cartItem_id}'`;
        }
        const cart_item = data.cart_item
        dispatch(editCart(cart_item));
    }
}

// delete a cart item ===========================
export const deleteCartItem = (cartItem_id) => async (dispatch) => {
    const response = await fetch(`/api/carts/${cartItem_id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        const data = await response.json();

        if (data.errors) {
            return `Error deleting CartItem with id #${cartItem_id}`;
        }
        const cart_item = data.cart_item
        console.log('heres cart_item: ', cart_item, '=======================================================================now dispatch')
        dispatch(deleteOneFromCart(cart_item));
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
            let addedToExisting = false;
            newState.map((item) => {
                if(item.item_id === action.payload.item_id &&
                item.item_color === action.payload.item_color && 
                item.item_size === action.payload.item_size){
                    item.quantity += action.payload.quantity
                    addedToExisting = true;
                }
            })
            if(addedToExisting) {return [ ...newState] }
                else { return [ ...newState, action.payload ] }

        case EDIT_CART:
            newState.map((item) => {
                console.log(item.id, action.payload)
                if (item.id === action.payload.id){
                    return action.payload
                }
            })
            return [ ...newState]

        case DELETE_ONE_FROM_CART:
            // need to run a filter and remove the item that matches the payload
            newState = newState.filter((item) => {
                return item.id !== action.payload.id
            })
            return [ ...newState]
            
        // case DELETE_ALL_FROM_CART:
        //     return [ ...action.payload]
        default:
            return state;
    }
}