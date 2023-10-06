/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chineseb: "#141414",
        antiflash: "#F3F3F3",
        chinesew: "#E1E1E1",
      },
    },
  },
  plugins: [],
};