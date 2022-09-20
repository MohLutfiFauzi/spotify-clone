/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '34': '136.5px',
        '47': '182px'
      },
      backgroundColor: {
        'button-fb': '#3B5998',
        'button-apple': '#191919',
      },
    },
  },
  plugins: [],
}