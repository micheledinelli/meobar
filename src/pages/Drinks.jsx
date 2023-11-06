import React from "react";
import Navbar from "../components/Navbar";

import DrinksMenu from "../assets/menu-drinks.pdf";
import DownloadMenu from "../components/buttons/DownloadButton";
import HeroDrinks from "../components/HeroDrinks";
import Footer from "../components/Footer.jsx";
import FloatingButton from "../components/buttons/FloatingButton";

import Wines from "../assets/menu-drinks.pdf";

export default function Drinks() {
  return (
    <>
      <Navbar />
      <div className="">
        <HeroDrinks />
        {/* <FloatingButton file={Wines} filename={"meobar-drinks"} /> */}
      </div>
      <Footer />
    </>
  );
}
