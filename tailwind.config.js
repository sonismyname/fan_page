/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#E7EDED',
        'main-200': '#CED9D9',
        'main-300': '#C0D8D8',
        'main-400': '#0D7373'
      },
    },
  },
  plugins: [],
}