/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'newL' : '0 2px 8px rgba(0, 0, 0, 0.8)',
      }, 
      fontFamily: {
        'handjet' : 'Handjet',
      }
    },
  },
  plugins: [],
}

