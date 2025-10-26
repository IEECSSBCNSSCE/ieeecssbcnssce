import React from 'react';
import ProjectsGrid from '../projectsGrid/ProjectsGrid';
import { projectsData } from '../../data/projectsData';
import './projects.css';

const Projects = () => {
  return (
    <main className="projects-page">
      {/* --- Hero Section for Projects Page --- */}
      <header className="projects-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Projects</h1>
          <p>Explore the innovative projects developed by IEEE CS members</p>
        </div>
      </header>

      {/* --- Projects Section --- */}
      <section className="projects-section">
        <div className="container">
          <ProjectsGrid projects={projectsData} />
        </div>
      </section>
    </main>
  );
};

export default Projects;

