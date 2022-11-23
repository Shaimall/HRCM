/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Urb: ["Urbanist-Bold", "sans-serif"],
        Ursb: ["Urbanist-SemiBold", "sans-serif"],
        Urbl: ["Urbanist-Black", "sans-serif"],
        Urm: ["Urbanist-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      sm: "1rem",
      md: "4rem",
      lg: "4rem",
      xl: "6rem",
      "2xl": "8rem",
    },
  },
};
