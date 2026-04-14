// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-copyright">
            © {currentYear} — Construido con React por Mateo
          </p>
        </div>

        <div className="footer-links">
          <a href="https://www.linkedin.com/in/mateo-ryhr-635a13206/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/MateoRyhr" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:mateoryhr29@gmail.com" className="email-link">
            mateoryhr29@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;