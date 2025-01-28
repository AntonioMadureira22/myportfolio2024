import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css';
import resume from '../navbar/newresume.pdf';

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-brand">
        <Link to="/">Antonio Madureira</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to='/about-me' onClick={toggleMenu}>About Me</Link></li>
        <li><Link to='/projects' onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/game" onClick={toggleMenu}>Game</Link></li>
        <li><Link to={resume} target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Resume</Link></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default NavBar;
