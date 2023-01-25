import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import { Outlet } from "react-router-dom";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

function Navigation() {
  return (
    <div>
      <div className="navigation-container flex items-cente p-2">
        <div className="w-1/4">
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
        </div>

        <div className="flex w-[300px] justify-between  ml-auto mr-10">
          <NavLink className="text-xl text-gray-600" to={"/shop"}>
            Shop
          </NavLink>
          <NavLink className="text-xl text-gray-600" to={"/signup"}>
            Sign up
          </NavLink>

          <div>
            <ShoppingBagOutlinedIcon fontSize="medium" />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
