import React, { Fragment, useContext } from "react";

import { Context as ProductContext } from "../../Context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";

function Shop() {
  const { catogories } = useContext(ProductContext);

  return (
    <div className="mt-20">
      {Object.keys(catogories).map((title) => {
        return (
          <Fragment key={title}>
            <h2 className="text-4xl font-bold m-2 uppercase text-center mb-10">
              {title}
            </h2>
            <div
              className="my-10"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                columnGap: "10px",
                rowGap: "50px",
              }}
            >
              {catogories[title].map((product) => {
                return <ProductCard key={title} product={product} />;
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Shop;
