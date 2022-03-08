const colors = require('tailwindcss/colors');
const customeColors = require('./CS/colors/customeColors.json');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      colors: {
        ...colors,
        ...customeColors
      },
  
    extend: {},
  },
  plugins: [],
}
