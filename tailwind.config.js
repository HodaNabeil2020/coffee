/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "3xl":"0px 0px 3px 2px #c5b6b6",
        "2xl":" 0px 0px 8px 2px #ffe3e2"
      },

      screens:{
        sm:'576px',
        md:'768px',
        lg:'992px',
        xl:'1200px',
        'xxl':'1400px'
      }
    },
  },
  plugins: [],
}