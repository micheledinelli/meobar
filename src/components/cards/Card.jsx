import React from "react";

function Card({ title, description, image, link }) {
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <div>
        <div className="relative ml-5 top-20 opacity-70 text-chinesew">
          <p className="text-3xl">{title}</p>
        </div>
        <img
          className="w-full h-full"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="relative text-center ml-5 bottom-10 opacity-70 text-chinesew">
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
