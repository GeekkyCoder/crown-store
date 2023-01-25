import React from "react";
import CatogoryItem from "../CatogoryItem/CatogoryItem";

function Directory({ catogories }) {
  return (
    <div className="grid grid-rows-3 grid-cols-3 p-2 mt-10 gap-2 place-items-center justify-center">
      {catogories.map((catogory) => {
        return <CatogoryItem key={catogory.id} catogory={catogory} />;
      })}
    </div>
  );
}

export default Directory;
