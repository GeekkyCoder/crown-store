import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import { Outlet } from "react-router-dom";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CartMenu from "../../ProductMenu/CartMenu";

import { Context } from "../../Context/CartContext";
import { Context as ProductContext } from "../../Context/ProductContext";

function Navigation() {
  const { isCartOpen, toggleCart } = useContext(Context);
  const { cartItems } = useContext(ProductContext);

  console.log(`nav: ${isCartOpen}`);

  return (
    <div>
      <div className="navigation-container flex items-cente p-2 relative">
        <div className="w-1/4">
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
        </div>

        <div
          className={`flex w-[${
            cartItems.length > 0 ? "300px" : "200px"
          }] justify-between  ml-auto mr-10`}
        >
          <NavLink className="text-xl text-gray-600" to={"/shop"}>
            Shop
          </NavLink>
          <NavLink className="text-xl text-gray-600" to={"/signup"}>
            Sign up
          </NavLink>

          {cartItems.length > 0 && (
            <div>
              {cartItems.length}
              <ShoppingBagOutlinedIcon fontSize="medium" onClick={toggleCart} />
            </div>
          )}

          {isCartOpen && <CartMenu />}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
