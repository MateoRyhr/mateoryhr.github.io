import React from 'react';
import profileImg from '../assets/mateo-profile.png'; 
import './ProfileHeader.css';

const ProfileHeader = () => {
  return (
    <section className="profile-header-container">
      {/* Imagen arriba del todo */}
      <div className="profile-image-container">
        <img src={profileImg} alt="Mateo Ryhr" className="profile-image" />
      </div>

      <div className="profile-text-content">
        {/* El toque del \n */}
        <p className="tech-greeting">{">"} console.log("Hola, soy: \n");</p>
        
        <h1 className="dev-name">Mateo Ryhr</h1>
        <h2 className="dev-title">
          Fullstack Backend Engineer <span className="accent-color">|</span> React & React Native
        </h2>
        
        <p className="dev-description">
          Especializado en la arquitectura de APIs escalables con <strong>Node.js</strong> y el desarrollo 
          de aplicaciones multiplataforma. Apasionado por la creación de soluciones integrales, desde el diseño robusto 
          de bases de datos relacionales hasta la experiencia de usuario final en Web y Mobile.
        </p>
        
        <div className="action-links">
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