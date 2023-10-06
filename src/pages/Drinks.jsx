import React from "react";
import Navbar from "../components/Navbar";

import DrinksMenu from "../assets/menu-drinks.pdf";
import DownloadMenu from "../components/DownloadMenu";

export default function Drinks() {
  return (
    <>
      <Navbar />
      <DownloadMenu file={DrinksMenu} filename={"meobar-drinks"} />
    </>
  );
}
