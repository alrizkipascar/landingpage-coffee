/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softGray: "#e9f0e5",
        yellowish: "#e2d9a2",
        "dark-yellowish": "#cec273",
        "dark-brown": "#2d2b1f",
        cyan: "#7ec9b0",
      },
      fontFamily: {
        sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
