import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Antonio Madureira</h3>
          <p>Crafting projects that inspire and innovate.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Me</h4>
          <ul className="social-links">
            <li><a href="https://github.com/AntonioMadureira22" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/antonio-madureira-a6b806191/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://X.com/tonemadureira" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Antonio Madureira. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
