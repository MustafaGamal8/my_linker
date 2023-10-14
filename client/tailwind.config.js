/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#29C8BE",
        secondary: "#2580D3",
        purple70:"#6929C4"
      }
    },
    
  },
  plugins: [],
}

