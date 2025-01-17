const {fontFamily} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont:['var(--font-mont)',...fontFamily.sans]
      },
      colors:{
        primary: '#222',
        secondary: '#7B7B7B',
        tertiary:'#F8F8F8',
        white:'#FFF',
        black:'#000'
      }
    },
  },
  plugins: [],
}

