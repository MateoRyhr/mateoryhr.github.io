import React from 'react';
import './Skills.css';
import { skills } from '../data/skills-data'

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">
          <span className="code-accent">&gt;</span> Habilidades
        </h2>
        
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;