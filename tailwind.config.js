/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        redaction: ['Redaction', ...defaultTheme.fontFamily.sans],
        sans: ['Mister Pixel', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
