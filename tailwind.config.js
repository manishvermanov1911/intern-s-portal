/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Urbanist', 'sans-serif'], // ✅ Don't use var()
        body: ['Instrument Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};