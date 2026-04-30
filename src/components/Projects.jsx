import React from 'react';
import { projects } from '../data/projects';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="code-accent">&gt;</span> Proyectos
        </h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                
                {/* 1. Título arriba, Categoría abajo */}
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
                
                <p>{project.description}</p>
                
                {/* 2. Tecnologías con separador ' | ' */}
                <div className="tech-stack">
                  {project.tech.map((item, index) => (
                    <React.Fragment key={item}>
                      <span className="tech-item">{item}</span>
                      {index < project.tech.length - 1 && <span className="separator"> | </span>}
                    </React.Fragment>
                  ))}
                </div>
                
                <div className="project-action">
                  <Link to={`/proyecto/${project.id}`} className="btn-read-more">
                    Ver Detalles y Arquitectura →
                  </Link>
                </div>

                {/* 3. Links dinámicos (Apilados verticalmente) */}
                <div className="project-links">
                  
                  {/* Link de GitHub */}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer">GitHub</a>
                  )}

                  {/* Link de Web */}
                  {project.links.web && (
                    <a href={project.links.web} target="_blank" rel="noreferrer">Web</a>
                  )}

                  {/* Lógica de Play Store */}
                  {project.links.playstore !== undefined && (
                    project.links.playstore === "" ? (
                      <span className="testing-status">En fase de pruebas cerradas en Play Store.</span>
                    ) : (
                      <a href={project.links.playstore} target="_blank" rel="noreferrer">Play Store</a>
                    )
                  )}
                  
                </div>              
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;