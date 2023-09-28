/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
  module.exports = {
    mode: "jit",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors: {
        "main": "#F89797",
        "accent": "#FFD027",
        "btntext": colors.white
      },
      fontFamily: {
        main: ['Noto Sans JP'],
        sans: ['Verdana'],
      },
    },
    keyframes: {
      yurayura: {
        "0%":{ rotate:-10 },
        "50%":{rotate:10},
        "100%":{rotate:-10},          
      }
    },
    animation: {
      yurayura: "yurayura 2s linear infinite",
    },
    plugins: [],
  }
