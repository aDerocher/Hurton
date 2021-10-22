// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const SET_ORDER_HIST = 'session/SET_ORDER_HIST'

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const setOrderHist = (order_hist) => ({
  type: SET_ORDER_HIST,
  payload: order_hist
})

// ================================================================
// ================================================================
const initialState = { user: null };
// ================================================================

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
  
    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (firstName, lastName, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const getOrderHistory = (user_id) => async (dispatch) => {
    if (!user_id) {
        console.log('Warning: order history requires user"')
        return
    }
    const response = await fetch(`/api/users/${user_id}/order-history`, {
        method: 'GET',
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return `Error fetching order history`;
        }
        const past_items = data.past_items
        dispatch(setOrderHist(past_items));
        return response;
    }
}

// export const editUser = (formData) => async (dispatch) => {
//     const { firstName, lastName, email } = formData
//   const response = await fetch('/api/auth/signup', {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       firstName,
//       lastName,
//       email
//     }),
//   });
  
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(setUser(data))
//     return null;
//   } else if (response.status < 500) {
//     const data = await response.json();
//     if (data.errors) {
//       return data.errors;
//     }
//   } else {
//     return ['An error occurred. Please try again.']
//   }
// }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
        return { user: action.payload }
    case REMOVE_USER:
        return { user: null }
    case SET_ORDER_HIST:
        state.user.order_history = action.payload
        return { user: state.user }
    default:
      return state;
  }
}
