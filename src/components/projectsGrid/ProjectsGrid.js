import React from 'react';
import './ProjectsGrid.css';

const ProjectsGrid = ({ projects, limit }) => {
  // Limit the number of projects displayed if limit prop is provided
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="projects-grid">
      {displayedProjects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;

