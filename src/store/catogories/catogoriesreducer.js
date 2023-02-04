import { CATOGORIES_ACTION_TYPES } from "./catogories_action_types";

const initalState = {
  catogories: [],
};

export const catogoriesReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATOGORIES_ACTION_TYPES.SET_PRODUCTS:
      return {
        ...state,
        catogories: payload,
      };
    default:
      return state;
  }
};
