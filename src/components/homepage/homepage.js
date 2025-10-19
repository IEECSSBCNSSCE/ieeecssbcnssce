import React from 'react';
import './homepage.css'; // We'll create this CSS file next

const HomePage = () => {
  // Place holder for Project Section
  const projects = [
      {
          image: 'https://placehold.co/600x400/002c5c/ffd700?text=Project+One',
          title: 'AI-Powered Chatbot',
          description: 'A cutting-edge chatbot designed to assist students with course selection and campus information.',
          link: '#'
      },
      {
          image: 'https://placehold.co/600x400/002c5c/ffd700?text=Project+Two',
          title: 'IoT Smart Campus',
          description: 'An initiative to deploy sensors across campus for real-time monitoring of environment and resource usage.',
          link: '#'
      },
      {
          image: 'https://placehold.co/600x400/002c5c/ffd700?text=Project+Three',
          title: 'Competitive Coding Platform',
          description: 'An online platform for hosting coding contests and helping students prepare for technical interviews.',
          link: '#'
      }
  ];

  return (
    <main className="home-page">
      {/* --- Hero Section --- */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Innovate, Learn, and Grow with IEEE CS</h1>
          <p>The official hub for student developers, engineers, and tech enthusiasts at our institution.</p>
          <a href="/contact" className="btn btn-primary">Join Our Community</a>
        </div>
      </header>

      {/* --- Mission Section --- */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p className="lead">
            To provide a platform for students to explore the world of computer science, develop technical skills beyond the curriculum, and connect with a network of peers and professionals in the tech industry.
          </p>
        </div>
      </section>

      {/* --- What We Offer Section --- */}
      <section className="features-section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>Hands-On Workshops</h3>
              <p>Gain practical skills in cutting-edge technologies through our interactive workshops led by experts and senior students.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Collaborative Projects</h3>
              <p>Join team projects to build your portfolio, solve real-world problems, and turn innovative ideas into reality.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Networking Events</h3>
              <p>Connect with industry professionals, alumni, and fellow students at our seminars, tech talks, and social gatherings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Our Projects Section --- */}
      <section className="projects-section">
          <div className="container">
              <h2>Our Projects</h2>
              <div className="projects-grid">
                  {projects.map((project, index) => (
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
          </div>
      </section>

      {/* --- Call to Action Section --- */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Become a member today and unlock a world of opportunities.</p>
          <a href="/contact" className="btn btn-secondary">Become a Member</a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;