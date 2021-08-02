const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["./_site/**/*.html", "./_site/*.html"],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
