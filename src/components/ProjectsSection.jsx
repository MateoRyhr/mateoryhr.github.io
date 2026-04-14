// src/components/ProjectsSection.jsx
import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects'; // Assuming the data file is here

export const ProjectsSection = () => {
  return (
    <section className="projects-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Featured Projects</h2>
      
      {/* Map through the projects array to generate cards */}
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};