import React, { createContext, useEffect, useReducer } from "react";

import {
  onAuthUserStateChange,
  createUserWithDocument,
} from "../utils/firebase/firebase-utils";

const Context = createContext();

const USER_ACTION_TYPES = {
   SET_CURRENT_USER:"SET_CURRENT_USER"
}

const initialState = {
  currentUser: null
}

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

const UserAuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  const [{currentUser},dispatch] = useReducer(userReducer,initialState)

  const setCurrentUser = (user) => {
    dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user})
    console.log("dispatched")
  }

  // useEffect(() => {
  //   const unsub = onAuthUserStateChange(async (user) => {
  //     if (user) {
  //       await createUserWithDocument(user);
  //     }
  //     setCurrentUser(user);
  //   });

  //   return unsub;
  // }, []);

  const value = { currentUser };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { UserAuthProvider, Context };
