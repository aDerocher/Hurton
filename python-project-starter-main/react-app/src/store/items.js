// =========== Constants ========================
const GET_ITEM = 'session/GET_ITEM';
const ALL_ITEMS = 'session/ALL_ITEMS';

const oneItem = (item) => ({
  type: GET_ITEM,
  payload: item
});

const allItems = (items) => ({
  type: ALL_ITEMS,
  payload: items
})



// =========== Thunk ========================
export const getAllItems = () => async (dispatch) => {
    const response = await fetch(`/api/items`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return `Error fetching all items`;
        }
        const items = data.items
        dispatch(allItems(items));
        return response;
    }
}


export const getOneItem = (item_id) => async (dispatch) => {
    const response = await fetch(`/api/items/${item_id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return `Error fetching item ${item_id}`;
      }
      const item = data.item
      dispatch(oneItem(item));
    }
  }


// =========== Reduce ========================
const initialState = [];

export default function reducer(state = initialState, action) {
    let newState = [ ...state ]
    switch (action.type) {
      case GET_ITEM:
        return [ action.payload ]
      case ALL_ITEMS:
        return [ ...action.payload]
      default:
        return state;
    }
}