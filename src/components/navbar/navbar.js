import React, { useState } from 'react';
import './navbar.css'; // We will create this CSS file next

const Navbar = () => {
  // State to manage whether the mobile navigation is open or closed
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Title */}
        <a href="/" className="navbar-logo">
          IEEE SB CS 💻
        </a>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {/* The three lines of the hamburger icon */}
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/events" className="nav-link">Events</a>
          </li>
          <li className="nav-item">
            <a href="/team" className="nav-link">Our Team</a>
          </li>
          <li className="nav-item">
            <a href="/projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;