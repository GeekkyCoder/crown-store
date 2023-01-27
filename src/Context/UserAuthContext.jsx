import React, { createContext, useEffect, useState } from "react";

import {
  onAuthUserStateChange,
  createUserWithDocument,
} from "../utils/firebase/firebase-utils";

const Context = createContext();

const UserAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthUserStateChange(async (user) => {
      if (user) {
        await createUserWithDocument(user);
      }
      setCurrentUser(user);
    });

    return unsub;
  }, []);

  const value = { currentUser };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { UserAuthProvider, Context };
