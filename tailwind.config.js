/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        blueBlack: "#1A133E",
        orangePeel: "#F7A120",
        orangeCrayola: "#FB6514",
        lavenderBlush: "#F2E2E2",
        Linen: "#F2E7DE",
        eggShell: "#F1EEDE",
        pastelMint: "#DBEACD",
        aeroBlue: "#C4E1C7",
        LightCyan: "#D2EFED",
        aliceBlue:  "#DDE7F2",
        languidLavender: "#FD8813",
        languid: "#FFBB0C",
        yellowGreen: "#82C938",
        ereieBlack:"#1F1F1F"
      },
      backgroundImage: {
        'gradient-0': 'linear-gradient(0deg, #120D2E 0%, #1A133E 100%)'
      },
      top: "100%",
    }
  },
  plugins: [],
};
