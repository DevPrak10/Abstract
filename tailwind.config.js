/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '620px',
      md: '768px',
      lg: '990px',
      xl: '1200px'
    },
    extend: {
      colors: {
        darkBlue: '#4c5fd5',
        paleBlue: '#dadbf1',
        black: '#000000',
        white: '#fff'
      }
    },
  },
  plugins: [],
}
