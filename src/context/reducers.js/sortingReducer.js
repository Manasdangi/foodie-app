export const initialSortingState = {};

export const sortingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SORT_METHOD':
      return {
        sortMethod: action.payload,
      };
    default:
      return state;
  }
};
