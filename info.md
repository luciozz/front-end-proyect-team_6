<<<<<<< HEAD
Vamos a hacer un Netflix

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
=======
# Info de Proyecto

## Nuestro proyecto es...
>>>>>>> 5ac7dc4ecdde3f1ea9388febff542476f34feb7b
