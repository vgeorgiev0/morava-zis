/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainHero: "url('../public/images/main.jpg')",
        apartmentHero: "url('../public/images/DSCN8304.JPG')",
        restaurantHero: "url('../public/images/img4.jpg')",
      },
      // fontFamily: {
      //   lobster: ["var(--font-lobster)"],
      // },
    },
  },
  plugins: [],
};
