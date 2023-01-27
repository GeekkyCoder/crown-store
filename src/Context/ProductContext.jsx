import React, { createContext, useState, useEffect } from "react";
// import {addCollectionAndDocuments} from "../utils/firebase/firebase-utils"
import {getCatogriesandDocuments} from "../utils/firebase/firebase-utils"
// import ShopData from "../shop-data";

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
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item;
    });
  }
};

const removeItemBy1 = (cartItems, productToRemove) => {
  const itemExist = cartItems.find((item) => {
    return item.id === productToRemove.id;
  });

  if (itemExist.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  return cartItems.map((item) => {
    return item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};

const removeItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

function CatogoriesProvider({ children }) {
  const [catogories, setCatogories] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    const total = cartItems.reduce((total, currentCartItem) => {
      return total + currentCartItem.quantity * currentCartItem.price;
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);


  useEffect(()=> {
   const getCollections = async () => {
    const catogoryMap = await getCatogriesandDocuments()
    setCatogories(catogoryMap)
   }
   getCollections()
  },[])


  // useEffect(()=> {
  //  addCollectionAndDocuments("catogories",ShopData)
  // },[])

  const value = {
    catogories,
    cartItems,
    addToCart,
    cartCount,
    addItemToCart,
    DecrementCartItems,
    deleteItemFromCart,
    totalPrice,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { CatogoriesProvider, Context };
