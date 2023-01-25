import React from "react";
import { NavLink } from "react-router-dom";

function CatogoryItem({ catogory }) {
  const { title, imageUrl } = catogory;

  return (
    <div className="w-full my-4">
      <img width={"100%"} src={imageUrl} alt={title} />
      <h2 className="text-gray-600 uppercase text-clip text-center">{title}</h2>
      <NavLink
        className="text-gray-600 uppercase block text-center text-2xl font-bold"
        to={"/shop"}
      >
        Shop Now
      </NavLink>
    </div>
  );
}

export default CatogoryItem;
