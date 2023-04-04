/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: "#b75656",
        "green-100": "#d0ebd5",
        "green-500": "#36982d",
        "green-900": "#304e33",
        "gray-light": "#d9d9d9",
        dark: "#2c2c2c",
        white: "#ffffff",
      },
      fontSize: {
        sm: "1.125rem",
        base: "1.25rem",
        lg: "1.5rem",
        xl: "2.25rem",
        "2xl": "2.5rem",
      },
      spacing: {
        tema: "90px",
      },
    },
    fontFamily: {
      poppins: "Poppins",
    },
    borderRadius: {
      none: "0",
      xs: "0.3125rem",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
