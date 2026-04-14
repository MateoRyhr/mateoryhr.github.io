// src/components/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams(); // Lee /proyecto/1
  
  // Busca el proyecto por ID
  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return (
      <section className="project-detail-section error-case">
        <div className="project-detail-container">
          <h2>Proyecto no encontrado</h2>
          <Link to="/" className="btn-back">← Volver al inicio</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-section">
      <div className="project-detail-container">
        
        <Link to="/" className="btn-back">← Volver al portafolio</Link>

        <div className="detail-header">
          <span className="detail-category">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.description}</p>
          
          <div className="tech-stack-detail">
            {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
          </div>
        </div>

        <div className="detail-content">
          <div className="detail-description">
            <h2>Ingeniería y Desafíos Técnicos</h2>
            
            {project.technicalDetails && project.technicalDetails.map((detail, index) => (
              <div key={index} className="technical-block">
                {/* Estructura solicitada: Lista ordenada para el título */}
                <ol start={index + 1} className="detail-ol">
                  <li><h4>{detail.title}</h4></li>
                </ol>
                
                {/* Párrafo de descripción */}
                <p className="detail-text">{detail.description}</p>
                
                {/* Lista de ítems variables */}
                <ul className="detail-ul">
                  {detail.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {project.links.github &&
          <div className="detail-links">
             { <a href={project.links.github} className="btn-secondary" target="_blank" rel="noreferrer">Ver Código en GitHub</a>}
          </div>}

        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;