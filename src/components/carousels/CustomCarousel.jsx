import Meobar from "../../assets/meoBar.png";

import hor1 from "../../assets/hor1.jpg";
import hor2 from "../../assets/hor2.jpg";
import hor3 from "../../assets/hor3.jpg";
import hor4 from "../../assets/hor4.jpg";

import ver1 from "../../assets/ver1.jpg";
import ver2 from "../../assets/ver2.jpg";
import ver3 from "../../assets/ver3.jpg";
import ver4 from "../../assets/ver4.jpg";

export default function CustomCarousel(props) {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - window.innerWidth;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + window.innerWidth;
  };
  return (
    <div className="absolute">
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
        className="snap-x snap-mandatory w-screen h-screen overflow-hidden overflow-x-scroll no-scroll whitespace-nowrap scroll-smooth flex gap-4"
      >
        {props.isMobile ? (
          <>
            <img
              className="w-screen snap-center object-cover"
              src={ver1}
              alt=""
            />
            <img
              className="w-screen snap-center object-cover"
              src={ver2}
              alt=""
            />
            <img
              className="w-screen snap-center object-cover"
              src={ver3}
              alt=""
            />
            <img
              className="w-screen snap-center object-cover"
              src={ver4}
              alt=""
            />
          </>
        ) : (
          <>
            <img
              className="w-screen snap-center object-cover"
              src={Meobar}
              alt=""
            />
            <img
              className="w-screen snap-center object-cover"
              src={hor1}
              alt=""
            />
            <img
              className="w-screen snap-center object-cover"
              src={hor2}
              alt=""
            />
            <img
              className="w-screen snap-center object-cover"
              src={hor3}
              alt=""
            />
            <img
              className="w-screen snap-center object-cover"
              src={hor4}
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
}
