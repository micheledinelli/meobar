import React from "react";
import Typewriter from "typewriter-effect";
import Meobar from "../assets/Meo_bar_27-03-2023_005_L.png";
import Card from "./Card";
import { AttentionSeeker, Bounce } from "react-awesome-reveal";

const cards = [
  { name: "Drinks", src: Meobar, text: "Our drinks" },
  { name: "Wines", src: Meobar, text: "Our wines" },
  { name: "Tapas", src: Meobar, text: "Our tapas" },
];

const typeWriterString = "Meobar";

export default function Hero() {
  return (
    <div className="h-screen">
      {/* <div className="sm:text-9xl text-5xl flex justify-center md:h-2/4 items-center h-screen pb-40">
        <div className="flex flex-col justify-between items-center bg-red-400 h-">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(typeWriterString).pauseFor(3000).start();
            }}
          />
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-12 m-auto w-2/4 md:w-2/3">
        {cards.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            src={item.src}
            text={item.text}
          ></Card>
        ))}
      </div> */}
      <div className="">
        <div className="flex flex-col justify-center text-7xl items-center  h-screen pb-16">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(typeWriterString).pauseFor(3000).start();
            }}
          />
        </div>
        <div className="absolute bottom-5 flex text-center m-auto justify-center w-full ">
          <button className="m-auto">
            <AttentionSeeker effect={"heartBeat"} triggerOnce delay={2000}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9"
              >
                <path
                  fillRule="evenodd"
                  d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </AttentionSeeker>
          </button>
        </div>
      </div>
    </div>
  );
}
