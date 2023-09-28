/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
  module.exports = {
    mode: "jit",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          yurayura: {
            '0%, 100%': { transform: 'rotate(-10deg)' },
            '50%': { transform: 'rotate(10deg)' },         
          }
        },
        animation: {
          yurayura: "yurayura 2s linear infinite",
        },
      },
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
    plugins: [],
  }
