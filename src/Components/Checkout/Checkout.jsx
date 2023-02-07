import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context as ProductContext } from "../../Context/ProductContext";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StripePayment from "../Stripe-Payment/StripePayment";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, addToCart, DecrementCartItems, deleteItemFromCart,totalPrice } =
    useContext(ProductContext);

  return (
    <>
    <div className="w-10/12 mx-auto mt-20">
      {cartItems.length ? (
        <div className="shadow-lg py-10 px-20 bg-white">
          <div className="header-container flex justify-between">
            <div>
              <span>Product</span>
            </div>
            <div>
              <span>Description</span>
            </div>
            <div>
              <span>Quantity</span>
            </div>
            <div>
              <span>Price</span>
            </div>
            <div>
              <span>Remove</span>
            </div>
          </div>
          <div className="flex flex-col ">
            {cartItems.map((item) => {
              const { id, name, imageUrl, quantity, price } = item;
              return (
                <div key={id} className="flex my-5 items-center">
                  <img width={"100px"} src={imageUrl} alt={`${name}-img`} />
                  <p className="ml-16">{name}</p>
                  {/* <span onClick={() => DecrementCartItems(item)}>decrement</span>
                   */}
                  <div className="flex ml-24 justify-between w-[110px] ">
                    <ChevronLeftIcon
                      className="hover:cursor-pointer"
                      onClick={() => DecrementCartItems(item)}
                    />
                    <span>{quantity}</span>
                    <ChevronRightIcon
                      className="hover:cursor-pointer"
                      onClick={() => addToCart(item)}
                    />
                  </div>
                  <p className="ml-24">{quantity}x{price}</p>
                  <CloseOutlinedIcon
                    className="ml-36 hover:cursor-pointer"
                    onClick={() => deleteItemFromCart(item)}
                    fontSize="large"
                  />
                </div>
              );
            })}
          </div>
          <div className="ml-auto w-[220px] flex justify-evenly items-center uppercase ">
            <span className="text-gray-700 text-xl">Total Price:</span>
            <span className="text-xl text-gray-700">${totalPrice}</span>
         </div>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-4xl font-bold text-center font-sans uppercase">
            No Items add items in cart 👇
          </h2>
          <button
            onClick={() => navigate("/shop")}
            className="uppercase p-2 w-1/3 my-5 shadow-lg mx-auto block rounded bg-black text-gray-300 hover:bg-white hover:text-black font-medium"
          >
            Go to Shop
          </button>
        </div>
      )}
    </div>
      <StripePayment/>
    </>
  );
}

export default Checkout;
