import React, { useContext } from "react";

import { Context } from "../../Context/ProductContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(Context);
  const { name, imageUrl, price } = product;

  return (
    <div className="relative hover:scale-[1.05] transition-all ">
      <img className="hover:opacity-60 hover:cursor-pointer hover:transition-opacity ease-in-out" src={imageUrl} alt={name} />
      <button
        onClick={() => addToCart(product)}
        className="absolute w-1/2 bottom-20 left-16 bg-white text-black p-4 px-4 rounded-sm opacity-60"
      >
        Add to Cart
      </button>
      <div className="flex justify-between mt-2">
        <h2>{name}</h2>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
