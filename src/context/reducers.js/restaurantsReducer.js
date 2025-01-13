export const initialRestaurantsState = {
  restaurants: [],
};

export const restaurantsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESTAURANTS':
      return {
        restaurants: action.payload,
      };

    default:
      return state;
  }
};
