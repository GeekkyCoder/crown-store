import React, { createContext, useState, useEffect } from "react";

import ShopData from "../shop-data.json";

const Context = createContext();

const addItemToCart = (cartItems, productToAdd) => {
  const itemExists = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (!itemExists) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  } else {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
};

const removeItemBy1 = (cartItems, productToRemove) => {
  const itemExist = cartItems.find((item) => {
    return item.id === productToRemove.id;
  });

  if (itemExist) {
    return cartItems.map((item) => {
      return item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }
};

const removeItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

function ProductContext({ children }) {
  const [products, setProducts] = useState(ShopData);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartItems(addItemToCart(cartItems, product));
  };

  const DecrementCartItems = (product) => {
    setCartItems(removeItemBy1(cartItems, product));
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(removeItem(cartItems, productToDelete));
  };

  useEffect(() => {
    const newCount = cartItems.reduce((total, currElement) => {
      return total + currElement.quantity;
    }, 0);
    setCartCount(newCount);
  }, [cartItems]);

  const value = {
    products,
    setProducts,
    cartItems,
    addToCart,
    cartCount,
    addItemToCart,
    DecrementCartItems,
    deleteItemFromCart,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { ProductContext, Context };
