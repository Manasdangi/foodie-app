// userReducer.js
export const initialUserState = {
  user: null,
  isAuthenticated: false,
  id: '',
  currLocation: {
    lat: 0,
    long: 0,
    placeName: '',
  },
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'LOGOUT':
      return {...state, user: null, isAuthenticated: false, loading: false};
    case 'UPDATE_PROFILE':
      return {...state, user: {...state.user, ...action.payload}}; // Merges new profile data with existing user data
    case 'DELETE_PROFILE':
      return {...state, user: null, isAuthenticated: false};
    case 'SET_USER_ID':
      console.log('Setting user id: ', action.payload);
      return {...state, id: action.payload};
    case 'SET_CURRENT_LOCATION':
      return {...state, currLocation: action.payload};
    default:
      return state;
  }
};
