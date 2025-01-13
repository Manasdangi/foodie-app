export const initialCartState = {
  id: '',
  addedDishes: [],
  restaurantInfo: {},
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      const dish = action.payload.item;
      const restaurantInfo = action.payload.details;

      if (state.id !== dish.restaurantId) {
        const res = {
          id: dish.restaurantId,
          addedDishes: [{...dish, cnt: 1}],
          restaurantInfo,
        };
        return res;
      }
      const searchedDish = state.addedDishes.find(item => item.id === dish.id);
      if (!searchedDish) {
        return {
          id: dish.restaurantId,
          addedDishes: [...state.addedDishes, {...dish, cnt: 1}],
          restaurantInfo,
        };
      }

      return {
        id: dish.restaurantId,
        addedDishes: [
          ...state.addedDishes.map(currDish =>
            currDish.id === dish.id
              ? {...currDish, cnt: currDish.cnt + 1}
              : currDish,
          ),
        ],
        restaurantInfo,
      };

    case 'DECREMENT_COUNT':
      const dish1 = action.payload;
      if (state.id !== dish1.restaurantId) {
        return state;
      }

      return {
        id: dish1.restaurantId,
        addedDishes: [
          ...state.addedDishes
            .map(dish =>
              dish.id === dish1.id && dish.cnt > 0
                ? {...dish, cnt: dish.cnt - 1}
                : dish,
            )
            .filter(dish => dish.cnt > 0),
        ],
        restaurantInfo: state.restaurantInfo,
      };

    case 'SET_CART':
      return action.payload;
    case 'CLEAR_CART':
      return initialCartState;
    default:
      return state;
  }
};
