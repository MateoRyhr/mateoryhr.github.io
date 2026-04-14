import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importamos tu componente principal
import './App.css'; // Importamos los estilos globales que creamos

// Buscamos el div vacío en el HTML
const rootElement = document.getElementById('root');

// Iniciamos React y le decimos que renderice tu App ahí dentro
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);