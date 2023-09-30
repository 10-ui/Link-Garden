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
          },
          sayu: {
            '0%, 100%': { transform: 'translateX(-5%)' },
            '50%': { transform: 'translateX(5%)' },
          }
        },
        animation: {
          yurayura: "yurayura 2s linear infinite",
          sayu: "sayu 2s linear infinite",
        },
      },
      colors: {
        "main": "#F89797",
        "accent": "#FFD027",
        "btntext": colors.white,
        "screen": "rgba(0,0,0,0.5)",
        "blue":"#42BBFF",
      },
      fontFamily: {
        main: ['Noto Sans JP'],
        sans: ['Verdana'],
      },
    },
    plugins: [],
  }
