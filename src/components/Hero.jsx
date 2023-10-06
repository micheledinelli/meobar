import React from "react";
import Typewriter from "typewriter-effect";
import Meobar from "../assets/meoBar.png";
import Card from "./Card";
import FlashingSvg from "./svg/FlashingSvg";

export default function Hero() {
  return (
    <div className="flex justify-center flex-col items-center text-center h-screen relative overflow-hidden bg-cover">
      <h1 className="font-bold text-gray-200 bg-black/40 px-2 rounded-md md:text-9xl  z-50">
        Meo Bar
      </h1>
      {/* <FlashingSvg /> */}
      <img className="absolute overflow-hidden" src={Meobar} alt="" />
    </div>
  );
}
