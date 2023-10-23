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
    <div className="flex justify-center flex-col items-center text-center h-screen relative overflow-hidden no-scroll bg-cover">
      <h1 className="font-bold  text-gray-200 bg-black/40 px-2 rounded-md md:text-9xl text-2xl z-50">
        Meo Bar
      </h1>
      {<CustomCarousel isMobile={isMobile} />}
    </div>
  );
}
