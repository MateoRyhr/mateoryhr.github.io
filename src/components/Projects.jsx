import React from 'react';
import { projects } from '../data/projects';
import './Projects.css';

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

                {/* 3. Links con separador ' | ' condicional */}
                <div className="project-links">
                  {/* Link de GitHub */}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer">GitHub</a>
                  )}
                  
                  {/* Separador: Aparece si hay GitHub y la propiedad playstore existe (esté vacía o no) */}
                  {project.links.github && project.links.playstore !== undefined && (
                    <span className="separator"> | </span>
                  )}

                  {/* Lógica de Play Store: Testing vs Link */}
                  {project.links.playstore !== undefined && (
                    project.links.playstore === "" ? (
                      <span className="testing-status">Currently in closed testing in Play Store</span>
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