import React, { createContext, useState,useEffect } from "react";

import ShopData from "../shop-data.json";

const Context = createContext();

// const addItemToCart = (cartItems, productToAdd) => {
//   const itemExists = cartItems.find((item) => {
//     return item.id === productToAdd.id;
//   });

//   if (!itemExists) {
//     return [...cartItems, { ...productToAdd, quantity: 1 }];
//   } else {
//     return cartItems.map((item) => {
//       return item.id === productToAdd.id
//         ? { ...item, quantity: item.quantity + 1 }
//         : item;
//     });
//   }
// };

function ProductContext({ children }) {
  const [products, setProducts] = useState(ShopData);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (e, product) => {
    // setCartItems(addItemToCart(cartItems, product));
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find((item) => item.id === product.id);
      if (!itemExists) {
        return [...prevCartItems, { ...product, quantity: 1 }];
      } else {
        return prevCartItems.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
    });
  };

  const value = { products, setProducts, cartItems, addToCart };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { ProductContext, Context };
