/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    color: {
      'purple': '#6e07f3'
    },
    extend: {
      animation: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
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
  plugins: [
    require('tw-elements/dist/plugin')
  ],
});