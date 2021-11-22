const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        desktopBackground: "url('assets/home/background-home-desktop.jpg')",
        tabletBackground: "url('assets/home/background-home-tablet.jpg')",
        mobileBackground: "url('assets/home/background-home-mobile.jpg')",
      },
      fontFamily: {
        bellafair: ["Bellafair"],
      },
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        ffffff: "#FFFFFF",
      },
      fontSize: {
        heading1: "150px",
      },
      width: {
        48: "48px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
