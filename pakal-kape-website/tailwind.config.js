/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pakal: {
          black: "#1a1a1a",
          charcoal: "#2d2d2d",
          slate: "#404040",
          stone: "#5a5a5a",
          silver: "#888888",
          cream: "#f5f5f0",
          white: "#ffffff",
          bean: {
            50: "#f8f7f4",
            100: "#efebe3",
            200: "#ddd5c7",
            300: "#c4b8a3",
            400: "#a89780",
            500: "#8b7a63",
            600: "#6e6150",
            700: "#5a4f42",
            800: "#4a4238",
            900: "#3d372f",
          },
          leaf: {
            50: "#f4f6f4",
            100: "#e5ebe6",
            200: "#ccd9ce",
            300: "#a8bfad",
            400: "#7ea086",
            500: "#5d826a",
            600: "#4a6855",
            700: "#3d5446",
            800: "#33463a",
            900: "#2b3a31",
          },
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
