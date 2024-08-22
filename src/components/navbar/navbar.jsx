import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css';
import resume from '../navbar/codingresume.pdf';

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-brand">
        <a href="#">Antonio Madureira</a>
      </div>
      <ul className="navbar-links">
        <li><Link to='/about-me'>About Me</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to={resume}  target="_blank" rel="noopener noreferrer">Resume</Link></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default NavBar;