import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import { Outlet } from "react-router-dom";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CartMenu from "../CartMenu/CartMenu";

import { Context } from "../../Context/CartContext";
import { Context as UserAuthContext } from "../../Context/UserAuthContext";
import { Context as ProductContext } from "../../Context/ProductContext";

import { signOutUserAuth } from "../../utils/firebase/firebase-utils";

import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user-selector";

function Navigation() {

const currentUser = useSelector(userSelector)

  const { isCartOpen, toggleCart } = useContext(Context);
  const { cartItems, cartCount } = useContext(ProductContext);
  // const { currentUser } = useContext(UserAuthContext);

  const handleUserSignOut = async () => {
    await signOutUserAuth();
  };

  return (
    <div>
      <div className="navigation-container flex items-center p-2 relative">
        <div className="w-1/4">
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
        </div>

        <div
          className={`flex w-[${
            cartItems.length > 0 ? "300px" : "250px"
          }] justify-between  ml-auto mr-10`}
        >
          <NavLink className="text-xl text-gray-600" to={"/shop"}>
            Shop
          </NavLink>
          {currentUser ? (
            <span onClick={handleUserSignOut}>Sign Out</span>
          ) : (
            <NavLink className="text-xl text-gray-600" to={"/auth"}>
              Sign in
            </NavLink>
          )}

          {cartCount > 0 && (
            <div className="relative">
              <span className="absolute z-50 left-[12px] top-4 text-[10px] text-center font-bold">
                {cartCount}
              </span>
              <ShoppingBagOutlinedIcon
                fontSize="large"
                onClick={toggleCart}
                className="hover:cursor-pointer hover:scale-[1.05]"
              />
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
