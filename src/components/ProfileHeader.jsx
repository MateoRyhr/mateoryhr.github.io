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
        <h1 className="dev-name">Mateo Ryhr</h1>
        <h2 className="dev-title">
          Fullstack Backend Dev <span className="accent-color">|</span> Automatización de Procesos <span className="accent-color">|</span> React & React Native
        </h2>
        
        <p className="dev-description">
          Especializado en la arquitectura de APIs escalables con <strong>Node.js</strong>, el desarrollo 
          de aplicaciones multiplataforma y la <strong>automatización de procesos administrativos, contables y de RRHH</strong>. 
          Apasionado por crear soluciones que conectan sistemas, eliminan tareas repetitivas y optimizan 
          flujos de trabajo mediante integraciones inteligentes con <strong>n8n</strong>, <strong>webhooks</strong> y bases de datos.
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