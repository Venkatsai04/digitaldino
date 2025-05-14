/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "poiret-one": "'Poiret One'",
      "porter-sans-block": "'Porter Sans Block'",
    }
  },
  plugins: [],
}