/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'], // ✅ Don't use var()
        instrument: ['"Instrument Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
