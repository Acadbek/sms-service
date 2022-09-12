/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      mainImage: "url('./assets/images/banner.png')",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    container: "1200px",
  },
  plugins: [],
};
