import React, { createContext, useReducer } from "react";

const Context = createContext();


const initialState = {
   isCartOpen: false
}

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
}

const cartReducer = (state,action) => {
   const {type} = action 
   switch(type){
     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen : !state.isCartOpen 
      }
      default :
      return state
   }
}

function CartContextProvider({ children }) {
  const [{isCartOpen},dispatch] = useReducer(cartReducer,initialState)


  const toggleCart = () => {
     dispatch({type:CART_ACTION_TYPES.SET_IS_CART_OPEN})
  }


  const value = { isCartOpen,toggleCart };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export  {CartContextProvider,Context};
