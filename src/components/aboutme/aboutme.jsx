// src/components/aboutme/aboutme.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../aboutme/aboutme.css';
import photo1 from '../aboutme/photome.jpg';
import githubIcon from '../aboutme/github.png'; // Add the path to your GitHub icon
import linkedinIcon from '../aboutme/linkedin.png'; // Add the path to your LinkedIn icon
import Typewriter from '../typewriter/typewriter'; // Import the Typewriter component

function AboutMe() {
  return (
    <div className="about-me">
      <div className="image-container">
        <img src={photo1} alt="Antonio Madureira" className="profile-image" />
      </div>
      <div className="description-container">
        <h1>About Me</h1>
        <p>
          Hello! I'm Antonio, a passionate car salesman and aspiring web developer. 
          With experience in selling high-end vehicles and a strong interest in technology, 
          I am dedicated to learning and growing in the field of web development. 
          My goal is to create impactful projects and contribute to exciting innovations. 
          When I'm not working, I enjoy exploring new technologies, driving fast cars, and spending time with friends.
        </p>
        <Typewriter 
          text="Full-Stack Web Development, User Experience, Database Management"
          typingSpeed={100}
          slowDeletingSpeed={150} // Slower speed for deleting
          pauseDuration={2000} // Pause for 2 seconds
        />
        <div className="social-links">
          <Link to="https://github.com/AntonioMadureira22" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub Profile" className="social-icon" />
          </Link>
          <Link to="https://www.linkedin.com/in/antonio-madureira-a6b806191/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn Profile" className="social-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
