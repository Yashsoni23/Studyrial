/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 15px 60px -20px rgba(0, 0, 0, 1)',
        '4xl': 'inset 0 0px 25px  rgba(59, 130, 246, .5)',
        '5xl': 'inset 0 0px 25px  #EF4444',
        '6xl': 'inset 0 0px 15px  #000000',
        '7xl': ' 0 0px 15px   #000000',
        '8xl': ' 0 0px 10px  #ffffff',
      },
      colors: {
        'navy-blue': '#012182',
        'navy-blue-200': '#199afc',
        'light-blue': '#2b8ced',
        'brown':'rgb(102, 2, 12)',
        'mypink':'rgb(248, 42, 111)',
        'loadBlack':'rgba(0,0,0,0.4)'
      },
    },
    
  },
  plugins: [],
}