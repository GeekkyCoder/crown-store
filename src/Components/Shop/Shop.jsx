import React, { Fragment, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Context as ProductContext } from "../../Context/ProductContext";
import Catogory from "../Catogory/Catogory";
import ProductCard from "../ProductCard/ProductCard";

import { getCatogriesandDocuments } from "../../utils/firebase/firebase-utils";
import { catogoriesSelector } from "../../store/catogories/catogories_selector";
import { setCotogories } from "../../store/catogories/catogories-action";

function Shop() {
  const dispatch = useDispatch()
  const catogories = useSelector(catogoriesSelector)
  
  useEffect(() => {
    const getCollections = async () => {
      const catogoryMap = await getCatogriesandDocuments();
      dispatch(setCotogories(catogoryMap));
    };
    getCollections();
  }, []);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <div className="mt-20">
              {Object.keys(catogories).map((title) => {
                return (
                  <Fragment key={title}>
                    <h2 className="text-4xl font-bold m-2 uppercase text-center my-20">
                      <NavLink to={`/shop/${title}`}>
                        <span>{title}</span>
                      </NavLink>
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
                      {catogories[title].slice(0, 4).map((product) => {
                        return <ProductCard key={title} product={product} />;
                      })}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          }
        />
        <Route path=":catogory" element={<Catogory />} />
      </Routes>
    </>
  );
}

export default Shop;
