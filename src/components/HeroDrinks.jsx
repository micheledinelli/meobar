import React from "react";

import MenuDrinks from "../assets/menu-drinks.pdf";
import DownloadButton from "../components/buttons/DownloadButton";

import drinklist from "../constants/drinklist.json";

export default function HeroDrinks() {
  return (
    <div className="w-full bg-red-500">
      <p className="mt-10 fade-in text-5xl">Our drinks</p>

      {/* <div className="flex flex-row">{console.log(drinklist.map(elem) => (cons))}</div> */}
    </div>
  );
}
