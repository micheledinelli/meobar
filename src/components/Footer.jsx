import React from "react";

import { FiInstagram } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full p-4 space-y-5 md:text-xl">
      <p>Meobar</p>
      <div className="flex justify-center space-x-6 items-center">
        <a href="mailto:meo@gmail.com">
          <AiOutlineMail />
        </a>
        <a>
          <FiInstagram />
        </a>
        <a>
          <AiOutlineWhatsApp />
        </a>
      </div>
    </div>
  );
}
