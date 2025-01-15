/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
'mainBg':'#F5F5F5',
'mainColor':'#FF698D',
'mainText':'#191D23'

      },
      fontFamily:{
        Inter:['Inter','sans-serif'],
       },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

