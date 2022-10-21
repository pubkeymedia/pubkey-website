/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mister Pixel', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
