import React, { useContext } from "react";

import { Context } from "../../Context/ProductContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(Context);
  const { name, imageUrl, price } = product;

  //   <div className='product-card-container'>
  //   <img src={imageUrl} alt={`${name}`} />
  //   <div className='footer'>
  //     <span className='name'>{name}</span>
  //     <span className='price'>{price}</span>
  //   </div>
  //   <Button buttonType='inverted' onClick={addProductToCart}>
  //     Add to card
  //   </Button>
  // </div>
  // );

  return (
    <>
      <div className="relative my-10 hover:scale-[1.05] transition-all w-full flex flex-col h-[350px] items-center ">
        <img
          className="hover:opacity-60 w-full h-[400px] object-cover hover:cursor-pointer hover:transition-opacity ease-in-out"
          src={imageUrl}
          alt={name}
        />
        <div className="flex justify-between mt-2">
          <span className="text-sm mr-20">{name}</span>
          <span className="text-sm">${price}</span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="absolute w-1/2 bottom-20 left-16 bg-white hover:bg-black hover:text-white text-black p-4 px-4 rounded-sm opacity-60"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
