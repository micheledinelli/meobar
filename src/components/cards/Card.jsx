import React from "react";

function Card({ title, description, image, link }) {
  return (
    <div className="max-w-sm rounded-md overflow-hidden group-hover:opacity-50">
      <div className="cursor-pointer group">
        <div className="relative ml-5 top-20 opacity-70 text-chinesew">
          <p className="text-3xl">{title}</p>
        </div>
        <img
          className="w-full h-full rounded-md"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="relative text-center ml-5 bottom-10 opacity-70 text-chinesew">
          <p className="text-xl">{description}</p>
        </div>
        <div className="relative text-center ml-5 bottom-50 opacity-70 text-chinesew">
          <p className="text-xl hidden group-hover:block1">Go to {title}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
