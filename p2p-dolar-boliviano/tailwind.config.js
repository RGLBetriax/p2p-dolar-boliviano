/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px",
      "2xl": "1660px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      lavender: "#212C5E",
      blueLight: "#F2FAFC",
      yellow: "#FFE5B4",
      grey: "#D5D3D5",
      red: "#FD2816",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif !important"],
    },
    extend: {},
  },
  plugins: [],
};
