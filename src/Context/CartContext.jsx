import React, { createContext, useState } from "react";

const Context = createContext();

function CartContextProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(prevStat => !prevStat)
  }


  const value = { isCartOpen,toggleCart };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export  {CartContextProvider,Context};
