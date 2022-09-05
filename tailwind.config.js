/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        heroimg: "url('../src/images/heroimg.jpg')",
        signin: "url('../src/images/signup.jpg')"
      }
    },
  },
  plugins: [],
}
