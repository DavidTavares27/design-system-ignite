/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.tsx`],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      black: "#000000",
      white: "#FFFF",
      transparent: "transparent",
      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7C7C8A",
        200: "#C4C4CC",
        100: "#E1E1E6",
      },
      cyan: {
        500: "#81D8F7",
        300: "#C0EFFF",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};





