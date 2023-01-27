import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import { Outlet } from "react-router-dom";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CartMenu from "../CartMenu/CartMenu";

import { Context } from "../../Context/CartContext";
import { Context as ProductContext } from "../../Context/ProductContext";

import { googleSignInPopUp,createUserWithDocument } from "../../utils/firebase/firebase-utils";


const handleSignInWithPopup = async () => {
  const {user}= await googleSignInPopUp()
  await createUserWithDocument(user)
  console.log(user)
}

function Navigation() {
  const { isCartOpen, toggleCart } = useContext(Context);
  const { cartItems,cartCount } = useContext(ProductContext);



  console.log(`nav: ${isCartOpen}`);

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
          <NavLink className="text-xl text-gray-600" to={"/auth"}>
            Sign in
          </NavLink>

          {cartCount > 0 && (
            <div className="relative">
              <span className="absolute z-50 left-[12px] top-4 text-[10px] text-center font-bold">{cartCount}</span>
              <ShoppingBagOutlinedIcon fontSize="large" onClick={toggleCart} className="hover:cursor-pointer hover:scale-[1.05]"/>
            </div>
          )}

          {isCartOpen && <CartMenu />}

          {/* <button onClick={handleSignInWithPopup}>sign in with google popup</button> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
