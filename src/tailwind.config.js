/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/index.html", // Aqui você define os arquivos onde o Tailwind irá procurar as classes usadas
    "./src/**/*.{html,js}", // Ajuste conforme sua estrutura de pastas e tipos de arquivos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

