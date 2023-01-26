import React from "react";
import { NavLink } from "react-router-dom";

function CatogoryItem({ catogory }) {
  const { title, imageUrl } = catogory;

  return (
    <div className="w-full my-4 relative hover:scale-[1.05] transition-all">
      {/* <img width={"100%"} src={imageUrl} alt={title} /> */}
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className=" bg-center bg-cover w-11/12  h-[300px] hover:opacity-40 hover:cursor-pointer"
      ></div>
      <div className="absolute bottom-10 left-20 bg-white rounded-sm shadow-md p-4 opacity-70">
      <h2 className="text-gray-600 uppercase text-clip text-center">{title}</h2>
      <NavLink
        className="text-gray-600 uppercase block text-center text-2xl font-bold"
        to={"/shop"}
      >
        Shop Now
      </NavLink>
      </div>
    </div>
  );
}

export default CatogoryItem;
