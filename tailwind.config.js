/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212741",
        secondary: "#181D30",
        "biru-uho": "#0E3B63",
        acsent: "#F4B700",
        other: "#212741",
      },
      keyframes: {
        "fade-hide-show": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "dot-animation": "fade-hide-show 1s infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
