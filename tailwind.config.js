 type {import('tailwindcss').Config} 
module.exports = {
  content: [
    './index.html',
    './**/*.{js,ts,jsx,tsx,html}', // Asegúrate de que Tailwind escanee todos tus archivos donde uses clases
  ],
  theme: {
    extend: {
      fontFamily: {
        // Aquí agregas tus fuentes personalizadas
        'gothic': ['Gothic', 'sans-serif'], // 'Gothic' es el nombre que le diste en @font-face
        'provicali': ['Provicali', 'cursive'], // 'Provicali' es el nombre que le diste en @font-face
        'shine-in-valentine': ['ShineInValentine', 'cursive'], // 'ShineInValentine' es el nombre que le diste en @font-face
        // Opcional: Si también tienes la fuente 'FSLA_NonCommercial.ttf'
        // 'fsla-non-commercial': ['FSLA NonCommercial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}