Pizzería Mamma Mía - Hito 4: Consumo de APIs con React

Este proyecto corresponde al Hito 4 del curso de React en Desafío Latam. El objetivo principal es validar los conocimientos sobre el consumo de APIs externas en React mediante useEffect y fetch.

Link del proyecto: https://hito-4-pizzeria-mamma-mia-5ev8.vercel.app/

🚀 Instalación y Configuración

Servidor Backend Para el correcto funcionamiento de la aplicación, es necesario ejecutar el servidor backend provisto:
Navegar a la carpeta del backend (Material de apoyo - Backend Pizzas).
Instalar las dependencias: npm install
Iniciar el servidor backend: npm start El backend quedará escuchando en http://localhost:5000.
Aplicación Frontend
En la carpeta raíz del proyecto frontend, instalar las dependencias: npm install
Iniciar el entorno de desarrollo: npm run dev
🛠️ Endpoints Consumidos

Obtener todas las pizzas: GET http://localhost:5000/api/pizzas

Obtener una pizza específica: GET http://localhost:5000/api/pizzas/p001

📋 Funcionalidades y Requerimientos

Componente Home.jsx
Consumo de la API con useEffect y fetch desde http://localhost:5000/api/pizzas.
Reemplazo de los datos estáticos del archivo local (pizzas.js) por la respuesta devuelta por el servidor.
Renderizado dinámico de las tarjetas de pizzas.
Componente Pizza.jsx
Consumo individual de un producto mediante el endpoint http://localhost:5000/api/pizzas/p001 con useEffect.
Visualización detallada de la pizza:
Nombre
Precio
Imagen
Ingredientes
Descripción detallada
Botón para añadir al carrito (sin funcionalidad asignada por el momento).
💻 Visualización de Componentes (App.jsx)

Para intercalar entre la vista general de la tienda (Home) y la vista detallada de un producto (Pizza), modifica el archivo App.jsx dejando activos los componentes requeridos:
Para visualizar el Home:

import Navbar from "./components/Navbar"; import Home from "./components/Home"; import Footer from "./components/Footer";

const App = () => { return (

); };
export default App;

Para visualizar el detalle de la Pizza:

import Navbar from "./components/Navbar"; import Pizza from "./components/Pizza"; import Footer from "./components/Footer";

const App = () => { return (

); };
export default App;

🛠️ Tecnologías Utilizadas React (Vite / CRA) JavaScript (ES6+) CSS / Bootstrap / Tailwind (según diseño del proyecto) API REST (Node.js/Express en backend local)

Marcelo Flores Fuentealba - 2026.
