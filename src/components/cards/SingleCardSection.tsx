import React from "react";

export default function SectionCard({ title, description, image, link }) {
  return (
    <div className="flex flex-col cursor-pointer w-96 group min-w-[24rem] overflow-hidden">
      <a href="">
        <div className="h-96 bg-cover items-end bg-center relative">
          <img
            className="w-full group-hover:scale-105 duration-200 transition-all"
            src={image}
          />
          <div className="z-50 text-white text-center w-full py-6 p-3 bg-gradient-to-t from-black to-transparent absolute bottom-0">
            <div className="font-bold z-50">{title}</div>
            <div className="text-sm z-50">{description}</div>
          </div>
        </div>
      </a>
    </div>
  );
}
