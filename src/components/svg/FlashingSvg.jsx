import React, { useState, useEffect } from "react";
export default function FlashingSvg() {
  // Stato per tenere traccia dello stato di lampeggiamento
  const [isFlashing, setIsFlashing] = useState(false);

  // Effetto per iniziare il lampeggiamento
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlashing((prevIsFlashing) => !prevIsFlashing);
    }, 1000); // Cambia il valore di interval a seconda della velocità desiderata
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className={`w-16 h-16 ${isFlashing ? "animate-flashing" : ""} z-50`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 5.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
