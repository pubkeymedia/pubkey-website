/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      animation: { blink: 'blink 1s steps(1, end) infinite' },
      fontFamily: {
        dos: ['DOS', ...defaultTheme.fontFamily.sans],
        redaction: ['Redaction', ...defaultTheme.fontFamily.sans],
        sans: ['Mister Pixel', ...defaultTheme.fontFamily.sans],
      },
      keyframes: { blink: { '0%, 100%': { opacity: 0 }, '50%': { opacity: 1 } } },
    },
  },
  plugins: [],
};
