/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: ( theme )=>({
        'particulas-img':"url('/src/assets/LOGOS/FONDO_PARTICULAS.jpg')",
      }),
    },
  },
  plugins: [],
}
