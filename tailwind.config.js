/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#212741',
        'secondary': '#181D30',
        'biru-uho': '#0E3B63',
        'acsent': '#F4B700',   
        'other': '#212741',    
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

