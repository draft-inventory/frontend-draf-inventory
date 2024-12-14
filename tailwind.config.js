/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', '"Roboto"', 'sans-serif'],
      },
      colors: {
        // Colores personalizados
        lightBg: '#f3f4f6', // Fondo en modo claro
        darkBg: '#1f2937',  // Fondo en modo oscuro
        lightText: '#374151',
        darkText: '#f9fafb',
      },
    },
  },
  plugins: [],
}

