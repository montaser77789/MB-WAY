/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white : '#ffffff',
        black : '#000000',
        blue_maincolor: '#0017c2',
        green_maincolor: '#04cAF50',
        gray_maincolor: '#E0E0E0',
      },
      screens:{
        sm : "576px",
        md : "768px",
        lg : "992px",
        xl : "1200px",
        xxl : "1400px",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}