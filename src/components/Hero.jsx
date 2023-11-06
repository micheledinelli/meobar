import React, { useEffect, useState } from "react";
import CustomCarousel from "./carousels/CustomCarousel";

export default function Hero() {
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
    <div className="flex md:justify-start justify-end max-h-screen flex-col items-center text-center h-screen relative overflow-hidden no-scroll bg-cover">
      <div className="font-bold w-full text-gray-400 opacity-70 pb-20 absolute pt-10 z-50 rounded-md md:text-7xl text-4xl">
        <div className="text-sm">cocktails & wines</div>
        <div>Meo Bar</div>
      </div>
      {/* <h1 className="font-bold text-gray-400 bg-black/40 opacity-90 p-2 rounded-md md:text-9xl text-2xl z-50">
        Meo Bar
      </h1> */}
      {<CustomCarousel isMobile={isMobile} />}
    </div>
  );
}
