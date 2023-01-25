import React from "react";

function CatogoryItem({ catogory }) {
  const { title, imageUrl } = catogory;


  return (
    <div className="w-1/4 ml-5 my-4">
      <img width={'100%'} src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <button>Shop Now</button>
    </div>
  );
}

export default CatogoryItem;

// backgroundImage: `url(${imageUrl})`
