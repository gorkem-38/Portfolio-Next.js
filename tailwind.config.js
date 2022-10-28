/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      'purple': '#6e07f3'
    },
    extend: {
      fontFamily: {
        'tapestry': ['Tapestry'],
        'playball': ['Playball'],
        'splash': ['Splash'],
        'martel': ['Martel Sans'],
        'arimo': ['Arimo'],
        'roboto': ['Roboto']
      },
    }
  },
  plugins: [],
});