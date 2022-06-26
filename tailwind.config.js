/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: '#69BC63',
      },
      spacing: {
        500: '500px',
      },
    },
  },
  plugins: [],
};
