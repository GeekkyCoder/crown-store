import { CATOGORIES_ACTION_TYPES } from "./catogories_action_types";

export const setCotogories = (catogoryMap) => {
  return {
    type: CATOGORIES_ACTION_TYPES.SET_PRODUCTS,
    payload: catogoryMap,
  };
};
