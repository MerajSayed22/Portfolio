/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple:'#6A80B9',
        cream:'#FFF6B3',
        skin:'#F6C794',
        olive:'#344C36',
        yellowMix:'#F9AD1B',
        DarkPink:'#ffafcc',
      }
    },
  },
  plugins: [],
}

