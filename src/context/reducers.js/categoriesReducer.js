export const initialCategoriesState = {
  categories: [],
};

export const categoriesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
