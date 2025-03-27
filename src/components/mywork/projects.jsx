import React from "react";
import "./projects.css";

const projects = [
  {
    title: "Basic Resume Builder",
    description: "A simple resume builder that can be downloaded.",
    liveLink: "https://basicresumebuilder.netlify.app/",
    githubLink: "https://github.com/your-username/tic-tac-toe",
  },
  {
    title: "Weather Reporter",
    description: "A weather app using a public API to display weather updates.",
    liveLink: "https://forecastingdays.netlify.app/",
    githubLink: "https://github.com/AntonioMadureira22/What-s-the-weather",
  },
  {
    title: "Random Meme Generator",
    description: "A random Meme generator where simple meme's pop up and text can change color and move around and be saved.",
    liveLink: "https://silly-valkyrie-e48ff3.netlify.app/",
    githubLink: "https://github.com/AntonioMadureira22/meme-generator",
  },
  {
    title: "Random Art Genie",
    description: "A random art generator .",
    liveLink: "https://randomartgenie.netlify.app/",
    githubLink: "https://github.com/AntonioMadureira22/random-art-generator",
  },
  {
    title: "CSV to JSON Convert",
    description: "Converts a CSV file to a Json file in Node using IDE.",
    liveLink: "https://github.com/AntonioMadureira22/csvtojson",
    githubLink: "https://github.com/AntonioMadureira22/csvtojson",
  },
  
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h1 className="section-title">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-button"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
