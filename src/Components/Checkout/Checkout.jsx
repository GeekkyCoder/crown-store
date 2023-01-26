import React, { useContext } from "react";

import { Context as ProductContext } from "../../Context/ProductContext";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function Checkout() {
  const { cartItems, addToCart, DecrementCartItems, deleteItemFromCart } =
    useContext(ProductContext);

  return (
    <div>
      {cartItems.map((item) => {
        const { id, name, imageUrl, quantity } = item;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <p>{quantity}</p>
            <span onClick={() => DecrementCartItems(item)}>decrement</span>
            <br />
            <span onClick={() => addToCart(item)}>increment</span>
            <br />
            <CloseOutlinedIcon
              onClick={() => deleteItemFromCart(item)}
              fontSize="large"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Checkout;
