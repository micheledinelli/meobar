import React from "react";

import MenuDrinks from "../assets/menu-drinks.pdf";
import DownloadButton from "../components/buttons/DownloadButton";

import drinklist from "../constants/drinklist.json";
import Card from "./cards/Card";
import TextCard from "./cards/TextCard";

function prepareIngredients() {
  drinklist.forEach((elem) => {
    elem.ingredients = elem.ingredients.join(" ");
  });
}

export default function HeroDrinks() {
  return (
    <div className="w-full">
      <p className="fade-in text-5xl p-10">Our drinks</p>
      <div className="flex flex-row justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5">
          {drinklist.map((elem, i) => (
            <TextCard
              key={elem.name}
              title={elem.name}
              ingredients={elem.ingredients}
              price={elem.price}
              analcolico={elem.analcolico}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
