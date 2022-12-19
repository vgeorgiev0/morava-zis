/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        homeBackgroundColor: "#B5FFE9",
        restaurantBackgroundColor: "#f6e7ae",
      },
      backgroundImage: {
        mainHero: "url('../public/images/main.jpg')",
        apartmentHero: "url('../public/images/DSCN8304.JPG')",
        restaurantHero: "url('../public/images/001Res.jpg')",
        restaurantFooterHero: "url('../public/images/img4.jpg')",
      },
      // fontFamily: {
      //   lobster: ["var(--font-lobster)"],
      // },
    },
  },
  plugins: [],
};
