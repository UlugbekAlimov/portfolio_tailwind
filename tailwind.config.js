/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      desktop:'1280px',
      mobile:'680px'
    },
    colors:{
      
    },
    extend: {},
  },
  plugins: [],
}