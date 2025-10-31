import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // We will create this CSS file next
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {
  // State to manage whether the mobile navigation is open or closed
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Title */}
        <Link to="/" className="navbar-logo">
          IEEE SB CS 💻
        </Link>

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
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link" onClick={closeMobileMenu}>Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link" onClick={closeMobileMenu}>Our Team</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={closeMobileMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/auth" className="nav-link" onClick={closeMobileMenu}>Login / Sign Up</Link>
          </li>
        </ul>
         {/* Profile Icon */}
        <div className="profile-icon">
          <Link to="/profile" onClick={closeMobileMenu}>
            <FaUserCircle size={28} color="#fff" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;