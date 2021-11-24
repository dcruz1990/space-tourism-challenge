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
        destinationMobileBackground: "url('assets/destination/background-destination-desktop.jpg')",
        destinationTabletBackground: "url('assets/destination/background-destination-tablet.jpg')",
        destinationDesktopBackground: "url('assets/destination/background-destination-desktop.jpg')",
        crewMobileBackground: "url('assets/crew/background-crew-desktop.jpg')",
        crewTabletBackground: "url('assets/crew/background-crew-tablet.jpg')",
        crewDesktopBackground: "url('assets/crew/background-crew-desktop.jpg')",
        technologyMobileBackground: "url('assets/technology/background-technology-desktop.jpg')",
        technologyTabletBackground: "url('assets/technology/background-technology-tablet.jpg')",
        technologyDesktopBackground: "url('assets/technology/background-technology-desktop.jpg')",
        

      },
      fontFamily: {
        bellefair: ["Bellefair"],
        barlot: ["Barlow Condensed"],
      },
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        ffffff: "#FFFFFF",
      },
      fontSize: {
        heading1: "150px",
        heading5: "28px",
        menuElement: "18px",
        bodyText: "18px",
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
