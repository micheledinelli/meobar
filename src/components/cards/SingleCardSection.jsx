import React from "react";
import ver4 from "../../assets/verr4.jpg";
import ver1 from "../../assets/verr4.jpg";
import ver2 from "../../assets/verr4.jpg";
import tapas1 from "../../assets/tapas1.jpg";
import tapas2 from "../../assets/tapas2.jpg";
import tapas3 from "../../assets/tapas3.jpg";
import tapas4 from "../../assets/tapas4.jpg";

export default function SectionCard({ title, description, image, link }) {
  return (
    <div className="flex flex-col md:flex-row gap-10 py-22 pb-20 justify-center items-center ">
      <div className="flex flex-col cursor-pointer w-96 group min-w-[24rem] overflow-hidden">
        <a href="">
          <div className="h-96 bg-cover items-end bg-center relative">
            <img
              className="w-full group-hover:scale-105 duration-200 transition-all"
              src={ver4}
              style={{
                objectPosition: "right",
                objectFit: "cover",
                height: "100%",
              }}
            />
            <div className="z-50 text-white text-center w-full py-6 p-3 bg-gradient-to-t from-black to-transparent absolute bottom-0">
              <div className="font-bold z-50">Drinks</div>
              <div className="text-sm z-50">Try our drinks</div>
            </div>
          </div>
        </a>
      </div>
      <div className="flex flex-col cursor-pointer w-96 group min-w-[24rem] overflow-hidden">
        <a href="">
          <div className="h-96 bg-cover items-end bg-center relative">
            <img
              className="w-full group-hover:scale-105 duration-200 transition-all"
              src={tapas4}
              style={{
                objectPosition: "center",
                objectFit: "cover",
                height: "100%",
              }}
            />
            <div className="z-50 text-white text-center w-full py-6 p-3 bg-gradient-to-t from-black to-transparent absolute bottom-0">
              <div className="font-bold z-50">Tapas</div>
              <div className="text-sm z-50">Try our tapas</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
