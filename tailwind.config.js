/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': { 'max': '740px' },
      },
      colors: {
        'textColor': '#CAC9FF',
      },
      backgroundImage: {
        'gradientCustom': 'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #F55', 
      },
    }  
  },
  variants: {
    extend: {
      display: ['mobile'], 
    }
  },
  plugins: [],
}
