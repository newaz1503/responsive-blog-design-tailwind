const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lato' : ['Lato', 'sans-serif'],
        'openSans' : ['Open Sans', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif']
      },
      maxWidth: {
        '1/4': '40%',
        '1/2': '50%',
        '3/4': '75%',
       }
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
      backgroungColor: ['hover']
    },
  },
  plugins: [],
}
