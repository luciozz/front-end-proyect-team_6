# Información

## Info de Proyecto

Nuestro proyecto es una web donde el usuario puede mostrar sus distintos tipos de proyectos

Utilizaremos Tailwond para CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Modificar tailwind.config.js:
    module.exports = {
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
modificar .src/index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;