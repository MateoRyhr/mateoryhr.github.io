// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Hola, soy Mateo</span>
          <span className="role">Software Engineer</span>
        </h1>
        
        <p className="hero-subtitle">
          Especializado en arquitecturas escalables con <strong>Node.js</strong> y <strong>PostgreSQL</strong>. 
          Construyendo soluciones de alto impacto y explorando la integración con bajo nivel e IoT.
        </p>
        
        {/* Simulación de Terminal para dar ese toque Backend/Linux */}
        <div className="terminal-box">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-body">
            <p><span className="prompt">mateo@dev:~$</span> whoami</p>
            <p className="output">Fullstack Developer | Backend Focus</p>
            <p><span className="prompt">mateo@dev:~$</span> cat current_stack.json</p>
            <p className="output">["Node.js", "Express", "PostgreSQL", "React Native"]</p>
            <p><span className="prompt">mateo@dev:~$</span> <span className="cursor"></span></p>
          </div>
        </div>

        <div className="hero-actions">
          {/* Estos links luego los conectaremos a tus secciones o redes */}
          <a href="#projects" className="btn-primary">Ver Proyectos</a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
        </div>
      </div>
    </section>
  );
};