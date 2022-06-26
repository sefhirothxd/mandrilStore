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
        bgBlack: '#1C1C1E',
      },
      spacing: {
        500: '500px',
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};
