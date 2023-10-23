import React from "react";
import Navbar from "../components/Navbar";
import FloatingButton from "../components/buttons/FloatingButton";

import WinesMenu from "../assets/menu-wines.pdf";

export default function Wines() {
  return (
    <div>
      <Navbar />
      {/* <DownloadMenu file={WinesMenu} filename={"meobar-drinks"}></DownloadMenu> */}
    </div>
  );
}
