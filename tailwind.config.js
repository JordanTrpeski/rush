/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Princess Sofia", "serif"],
        sans: ["Raleway", "sans-serif"],
        price: ["Roboto", "sans-serif"]  
      }
    },
  },
  plugins: [],
}
