import React, { createContext, useState, useEffect, useReducer } from "react";
// import {addCollectionAndDocuments} from "../utils/firebase/firebase-utils"
import { getCatogriesandDocuments } from "../utils/firebase/firebase-utils";
// import ShopData from "../shop-data";

const Context = createContext();

const initialsState = {
  catogories: {},
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_CATOGORIES":
      return {
        ...state,
        catogories: payload,
      };
    case "ADD_ITEMS_INTO_CART":
      return {
        ...state,
        cartItems: payload,
      };

    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: payload,
      };

    case "REMOVE_ITEM_BY_1":
      return {
        ...state,
        cartItems: payload,
      };

    case "INCREMENT_CART_COUNT":
      return {
        ...state,
        cartCount: payload,
      };

    case "SET_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: payload,
      };

    default:
      return state;
  }
};

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
            quantity: item.quantity + 1,
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
  const [{ catogories, cartItems, cartCount, totalPrice }, dispatch] =
    useReducer(productReducer, initialsState);

  // const [catogories, setCatogories] = useState({});
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_ITEMS_INTO_CART",
      payload: addItemToCart(cartItems, product),
    });
  };

  const DecrementCartItems = (product) => {
    dispatch({
      type: "REMOVE_ITEM_BY_1",
      payload: removeItemBy1(cartItems, product),
    });
  };

  const deleteItemFromCart = (productToDelete) => {
    // setCartItems(removeItem(cartItems, productToDelete));
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: removeItem(cartItems, productToDelete),
    });
  };

  useEffect(() => {
    const newCount = cartItems.reduce((total, currElement) => {
      return total + currElement.quantity;
    }, 0);
    dispatch({ type: "INCREMENT_CART_COUNT", payload: newCount });
  }, [cartItems]);

  const setTotalPrice = (total) => {
    dispatch({ type: "SET_TOTAL_PRICE", payload: total });
  };

  useEffect(() => {
    const total = cartItems.reduce((total, currentCartItem) => {
      return total + currentCartItem.quantity * currentCartItem.price;
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const setCatogories = (catogoryMap) => {
    dispatch({ type: "SET_CATOGORIES", payload: catogoryMap });
  };

  // useEffect(() => {
  //   const getCollections = async () => {
  //     const catogoryMap = await getCatogriesandDocuments();
  //     setCatogories(catogoryMap);
  //   };
  //   getCollections();
  // }, []);

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
