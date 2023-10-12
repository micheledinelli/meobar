import React from "react";
import Ver1 from "../assets/ver1.jpg";
import Ver2 from "../assets/ver2.jpg";
import Ver3 from "../assets/ver3.jpg";
import Ver4 from "../assets/ver4.jpg";

export default function HeroDrinks() {
  return (
    <div className="wm-hero js-animate">
      <div className="overflow-hidden text-center w-max px-4 m-auto">
        <h1 className="text-7xl font-semibold my-8 opacity-0">
          Discover <br /> our drinks
        </h1>
      </div>
      <div className="flex flex-row justify-center space-x-5">
        <div className="flex overflow-x-scroll overflow-hidden w-5/6 space-x-3 group-hover:scale-105 duration-200 transition-all">
          <img
            src={Ver4}
            className="group-hover:scale-105 duration-200 transition-allobject-cover h-48 w-96"
          />
          <img src={Ver2} className="object-cover h-48 w-96" />
          <img src={Ver1} className="object-cover h-48 w-96" />
          <img src={Ver3} className="object-cover h-48 w-96" />
        </div>
      </div>
    </div>
  );
}
