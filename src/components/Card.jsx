import React from "react";

export default function Card(props) {
  return (
    <div className="my-5 max-w-md rounded overflow-hidden shadow-lg">
      <img className="w-full" src={props.src} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-antiflash text-xl mb-8">
          {props.name}
        </div>
        <p className="text-chinesew text-base">{props.text}</p>
      </div>
    </div>
  );
}
