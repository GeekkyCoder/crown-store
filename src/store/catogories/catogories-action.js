import { CATOGORIES_ACTION_TYPES } from "./catogories_action_types";
// import { getCatogriesandDocuments } from "../../utils/firebase/firebase-utils";

export const fetch_catogries_start = () => {
  return { type: CATOGORIES_ACTION_TYPES.FETCH_CATOGORIES_START };
};

export const fetch_catogories_success = (catogoriesMap) => {
  return {
    type: CATOGORIES_ACTION_TYPES.FETCH_CATOGORIES_SUCCESS,
    payload: catogoriesMap,
  };
};

export const fetch_Catogories_fail = (error) => {
  return {
    type: CATOGORIES_ACTION_TYPES.FETCH_CATOGORIES_FAIL,
    payload: error,
  };
};

// export const fetchCatogoriesAsync = () => async (dispatch) => {
//   dispatch(fetch_catogries_start());
//   try {
//     const catogoryMap = await getCatogriesandDocuments();
//     dispatch(fetch_catogories_success(catogoryMap));
//   } catch (error) {
//     dispatch(fetch_Catogories_fail(error));
//   }
// };
