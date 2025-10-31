import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsGrid from '../projectsGrid/ProjectsGrid.js';
import { projectsData } from '../../data/projectsData';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './homepage.css';
import './homepage.css'; // We'll create this CSS file next

const HomePage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <main className="home-page">
      {/* --- Hero Section --- */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Innovate, Learn, and Grow with IEEE CS</h1>
          <p>The official hub for student developers, engineers, and tech enthusiasts at our institution.</p>
          <Link to="/join" className="btn btn-primary">Join Our Community</Link>
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

      {/* --- 3. NEW SLIDER SECTION --- */}
      <section className="slider-section">
        <div className="container">
          <h2>Activities & Gallery</h2>
          <p className="lead">See what we've been up to!</p>
          <Slider {...settings}>
            {/* Using placeholder images for demo */}
            <div>
              <img src="https://picsum.photos/800/400?random=1" alt="Demo Activity 1" />
            </div>
            <div>
              <img src="https://picsum.photos/800/400?random=2" alt="Demo Activity 2" />
            </div>
            <div>
              <img src="https://picsum.photos/800/400?random=3" alt="Demo Activity 3" />
            </div>
            <div>
              <img src="https://picsum.photos/800/400?random=4" alt="Demo Activity 4" />
            </div>
            <div>
              <img src="https://picsum.photos/800/400?random=5" alt="Demo Activity 5" />
            </div>
          </Slider>
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Become a member today and unlock a world of opportunities.</p>
          <Link to="/contacts" className="btn btn-secondary">Become a Member</Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;