import React from "react";
import Navbar from "../components/Navbar";
import Map from "../components/Map"
import TimeTable from "../components/TimeTable"

function openMaps(data1, data2){
  return 0
}

export default function ReachUs() {
  return (
    <div className="md:overflow-hidden">
      <Navbar />
        <div className="h-screen w-screen md:flex md:flex-row md:overflow-hidden">

        
          <div className="h-screen overflow-hidden z-0 md:h-full md:w-1/2 ">
            <Map />
          </div>  
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-2 absolute bottom-10 right-5 z-10 md:relative md:flex md:justify-center md:z-0 md:bottom-0 md:right-0  md:gap-20 md:p-10">
              {/* clock */}
              <div className="bg-black rounded-full flex justify-center p-2 md:hidden ">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  className="w-14 h-14"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              {/* pin */}
              <div className="bg-black rounded-full flex justify-center p-2 md:bg-white md:hover:bg-gray-300 md:text-black md:row-span-1 md:h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-14 h-14 md:h-28 md:w-28 md:p-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              {/* telephone */}
              <div className="bg-black rounded-full flex justify-center p-2 md:bg-white md:hover:bg-gray-300 md:text-black md:row-span-1 md:h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-14 h-14 md:h-28 md:w-28 md:p-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              {/* mail */}
              <div className="bg-black rounded-full flex justify-center p-2 md:bg-white md:hover:bg-gray-300 md:text-black md:row-span-1 md:h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-14 h-14 md:h-28 md:w-28 md:p-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
            </div>
            <div className="hidden md:block md:px-5">
                <TimeTable />
            </div>
          </div>
        </div>
    </div>
  );
}
