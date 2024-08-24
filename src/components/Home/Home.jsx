// src/components/HomePage/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'; 

function HomePage() {
  return (
    <div className="home-page">
      <div className="intro-section">
        <h1>Hello, I'm Antonio Madureira But you can call me Tone</h1>
        <p>Full-Stack Web Developer | User Experience Designer | Database Manager</p>
        <div className="button-container">
          <Link to="/projects" className="btn">View Projects</Link>
          <Link to="/about-me" className="btn">About Me</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
