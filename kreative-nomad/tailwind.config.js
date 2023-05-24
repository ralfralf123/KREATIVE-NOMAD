/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Comfortaa'],
        paragraph: ['Figtree'],
        
      },
      colors: {
        'background': '#D7A53E',
        'about': '#BCDDC9',
        'services': '#023025',
        'beige': '#F8C77C',
        'crafts':'#BA2D0B',
        'contact':'#2A1A1F'
      }
    },
  },
  plugins: [],
}