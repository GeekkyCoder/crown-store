import React,{useContext} from "react";

import { Context } from "../../Context/ProductContext";

function ProductCard({ product }) {
    const {addToCart} = useContext(Context)
  const { name, imageUrl, price } = product;

  return (
    <div className="relative">
      <img src={imageUrl} alt={name} />
      <button onClick={(e)=> addToCart(e,product)} className="absolute bottom-10 left-14 bg-black text-gray-50 p-2 rounded-md w-[200px] hover:bg-gray-800 hover:text-white ">
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
