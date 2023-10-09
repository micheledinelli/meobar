import React from "react";
import Navbar from "../components/Navbar";
import Map from "../components/Map"
import TimeTable from "../components/TimeTable"

export default function ReachUs() {
  return (
    <div class="h-full overflow-hidden">
      <Navbar />
      <div class="flex flex-row h-full bg-red-500 overflow-hidden">
        <div class="basis-2/3 h-1/2 my-auto px-10">
          <Map />
        </div>
        <div class="basis-1/3">
          <TimeTable /> 
        </div>
      </div>
    </div>
  );
}
