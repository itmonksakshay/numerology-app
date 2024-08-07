/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      blueBlack: "#1A133E",
      backgroundImage: {
        'gradient-0': 'linear-gradient(0deg, #120D2E 0%, #1A133E 100%)'
      },
      top: "100%",
    }
  },
  plugins: [],
};
