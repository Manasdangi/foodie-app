export const initialAddressState = [];

export const addressesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return [...state, action.payload];
    case 'REMOVE_ADDRESS':
      return state.filter(address => address.id !== action.payload.id);
    case 'UPDATE_ADDRESS':
      return (state.filter(address => address.id === action.payload.id)[0] =
        action.payload);
    default:
      return state;
  }
};
