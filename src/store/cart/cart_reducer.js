import { CART_ACTION_TYPES } from "./cart_action_types";

const initialState = {
  isCartOpen: false,
};

export const cartReducer = (state = initialState, { type}) => {
  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };
    default:
      return state;
  }
};
