/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        priceColor: 'hsl(158, 36%, 37%)', buttonColor: 'hsl(158, 36%, 37%)',
      },
    },
  },
  plugins: [],
}
