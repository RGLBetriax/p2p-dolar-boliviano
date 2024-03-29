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
      blueLight: "#F2FAFC",
      lavender: "#212C5E",
      blue: "#131E50",
      blue2: "#1C85E8",
      yellow: "#FFE5B4",
      orange: "#FEBB94",
      grey: "#D5D3D5",
      grey2: "#9CACCB",
      red: "#FD2816",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif !important"],
    },
    extend: {},
  },
  plugins: [],
};
