import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = () => {
  return (
    <section className="profile-header-container">
      <div className="profile-content">
        {/* Terminal-like greeting accent */}
        <p className="tech-greeting">{">"} console.log("Hola, soy");</p>
        
        <h1 className="dev-name">Mateo Ryhr</h1>
        <h2 className="dev-title">
          Fullstack Backend Engineer <span className="accent-color">|</span> React & React Native
        </h2>
        
        <p className="dev-description">
          Especializado en la arquitectura de <strong>APIs</strong> escalables con <strong>Node.js</strong> y el desarrollo 
          de aplicaciones multiplataforma. Apasionado por la creación de soluciones integrales, desde el diseño robusto 
          de bases de datos relacionales hasta la experiencia de usuario final en <strong>Web y Mobile.</strong>
        </p>
        
        <div className="action-links">
          {/* Main call to action pointing to your complex projects */}
          <a href="#projects" className="btn-primary">
            Explorar Proyectos
          </a>
          <a href="https://github.com/MateoRyhr" target="_blank" rel="noreferrer" className="btn-secondary">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;