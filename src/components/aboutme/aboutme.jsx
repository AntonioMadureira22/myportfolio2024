import React from 'react';
import '../aboutme/aboutme.css';
import photo1 from '../aboutme/photome.jpg';

function AboutMe() {
  return (
    <div className="about-me">
    <div className="image-container">
      <img src= {photo1}  alt="Antonio Madureira" className="profile-image" />
    </div>
    <div className="description-container">
      <h1>About Me</h1>
      <p>
        Hello! I'm Antonio, a passionate car salesman and aspiring web developer. 
        With experience in selling high-end vehicles and a strong interest in technology, 
        I am dedicated to learning and growing in the field of web development. 
        My goal is to create impactful projects and contribute to exciting innovations. 
        When I'm not working, I enjoy exploring new technologies, reading, and spending time with friends.
      </p>
    </div>
  </div>
);
}

export default AboutMe;