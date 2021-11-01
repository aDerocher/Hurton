// =========== Constants ========================
// const GET_ITEM = 'session/GET_ITEM';
const ALL_ITEM_TYPES = 'session/ALL_ITEM_TYPES';

// const oneItem = (item) => ({
//   type: GET_ITEM,
//   payload: item
// });

const allItemTypes = (item_types) => ({
  type: ALL_ITEM_TYPES,
  payload: item_types
})



// =========== Thunk ========================
export const getItemTypes = () => async (dispatch) => {
    const response = await fetch(`/api/item_types`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return `Error fetching all item types`;
        }
        const item_types = data.item_types
        dispatch(allItemTypes(item_types));
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
const initialState = {};

export default function reducer(state = initialState, action) {
    // let newState = [ ...state ]
    switch (action.type) {
    //   case GET_ITEM:
    //     return [ ...newState, action.payload ]
      case ALL_ITEM_TYPES:
        // return [ ...action.payload ]

        let itemTypes = {};
        action.payload.forEach(type => {
            itemTypes[type.id] = type;
        })
        return itemTypes

      default:
        return state;
    }
  }