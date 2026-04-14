// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="status-badge">{project.status}</span>
      </div>
      
      <p className="description">{project.description}</p>

      {/* Highlighting backend/architectural achievements */}
      <div className="highlight">
        <strong>Key Engineering:</strong> {project.highlights}
      </div>

      <div className="tech-stack">
        {project.stack.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
};