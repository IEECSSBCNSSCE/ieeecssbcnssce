import React from 'react';
import ProjectsGrid from '../projectsGrid/ProjectsGrid';
import { projectsData } from '../../data/projectsData';
import './projects.css';

// Filter projects by status
const completed = projectsData.filter(project => project.status === 'completed');
const ongoing = projectsData.filter(project => project.status === 'ongoing');
const future = projectsData.filter(project => project.status === 'future');

const Projects = () => {
  return (
    <main className="projects-page">
      <header className="projects-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Projects</h1>
          <p>Explore the innovative projects developed by IEEE CS members</p>
        </div>
      </header>

      <section className="projects-section">
        <div className="container">
          <h2>Ongoing Projects</h2>
          <ProjectsGrid projects={ongoing} />
          <h2>Completed Projects</h2>
          <ProjectsGrid projects={completed} />
          <h2>Future Projects</h2>
          <ProjectsGrid projects={future} />
        </div>
      </section>
    </main>
  );
};

export default Projects;
