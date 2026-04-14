// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-copyright">
            © {currentYear} — Built with React by Mateo
          </p>
          <div className="status-indicator">
            <span className="blink-dot"></span>
            System Status: Operational
          </div>
        </div>

        <div className="footer-links">
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:tu-email-profesional@dev.com" className="email-link">
            mateoryhr29@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};