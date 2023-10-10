import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Meobar from "../assets/meoBar.png";
import hor1 from "../assets/hor1.jpg";
import hor2 from "../assets/hor2.jpg";
import hor3 from "../assets/hor3.jpg";
import hor4 from "../assets/hor4.jpg";
import FlashingSvg from "./svg/FlashingSvg";

export default function Hero() {
  let intervalId;
  const startAutoScroll = () => {
    intervalId = setInterval(() => {
      slideRight();
    }, 3000);
  };
  startAutoScroll();
  const stopAutoScroll = () => {
    clearInterval(intervalId); // Fermiamo lo scrolling automatico
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - window.innerWidth;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + window.innerWidth;
  };
  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <div className="flex justify-center flex-col items-center text-center h-screen relative overflow-hidden bg-cover">
      <h1 className="font-bold text-gray-200 bg-black/40 px-2 rounded-md md:text-9xl text-2xl z-50">
        Meo Bar
      </h1>
      {/* <FlashingSvg /> */}
      {isMobile ? (
        <div>
          <img className="" src="" />
        </div>
      ) : (
        <div className="absolute ">
          <div
            onClick={slideLeft}
            className="bg-transparent h-full text-center flex items-center absolute px-10 transition-all duration-100 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            onClick={slideRight}
            className="bg-transparent h-full absolute right-0 flex items-center z-50 px-10 transition-all duration-100 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            id="slider"
            className=" w-full h-full overflow-hidden overflow-x-scroll no-scroll whitespace-nowrap scroll-smooth flex gap-4"
          >
            <img className="" src={Meobar} alt="" />
            <img className="" src={hor1} alt="" />
            <img className="" src={hor2} alt="" />
            <img className="" src={hor3} alt="" />
            <img className="" src={hor4} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
