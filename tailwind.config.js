/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand': '#F9DBBA',
        'sky': '#5B99C2',
        'ocean': '#1A4870',
        'night': '#1F316F',
      }
    },
  },
  plugins: [],
}

