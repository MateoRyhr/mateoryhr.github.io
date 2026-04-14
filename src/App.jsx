// src/App.jsx actualizado
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home'; // Este lo creas moviendo el contenido del main actual
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-wrapper">
        <header>
          {/* Aquí podrías poner una NavBar sutil si quisieras */}
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Ruta dinámica para cada proyecto */}
            <Route path="/proyecto/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;