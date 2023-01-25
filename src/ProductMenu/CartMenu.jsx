import React, { useContext, Fragment } from "react";
import { NavLink } from "react-router-dom";

import { Context } from "../Context/ProductContext";

function CartMenu() {
  const { cartItems } = useContext(Context);

  return (
    <Fragment>
      <div className="flex absolute shadow-md h-[400px]  overflow-y-scroll top-10 flex-col z-50 py-4 bg-white text-gray-600 rounded w-[300px]">
        {cartItems.map((item) => {
          const { id, name, imageUrl, price, quantity } = item;
          return (
            <div
              key={id}
              className="flex justify-between items-center mt-2 w-10/12 mx-auto"
            >
              <div className="w-[120px]">
                <img
                  className="rounded"
                  width={"80%"}
                  src={imageUrl}
                  alt={`${name}-img`}
                />
                <h4 className="m-0">{name}</h4>
              </div>
              <p>x-{quantity}</p>
              <p>{price}</p>
            </div>
          );
        })}
        <NavLink
          className="uppercase  text-center w-10/12 mx-auto text-white hover:bg-white hover:text-black shadow-lg py-2 bg-black rounded mt-2"
          to="/checkout"
        >
          checkout
        </NavLink>
      </div>
    </Fragment>
  );
}

export default CartMenu;
