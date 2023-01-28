import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context as ProductContext } from "../../Context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";

function Catogory() {
  const { catogories } = useContext(ProductContext);
  const { catogory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(catogories[catogory]);
  }, [catogories]);

  return (
    <>
      <h2 className="text-center text-4xl font-bold font-mono my-10">
        {catogory.toUpperCase()}
      </h2>
      <div className="grid grid-cols-4 gap-10 ">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.title} product={product} />;
          })}
      </div>
    </>
  );
}

export default Catogory;
