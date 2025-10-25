import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <main className="notfound-page">
      <div className="notfound-content">
        <div className="notfound-icon">404</div>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <p className="subtitle">It might have been moved or deleted.</p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">Go to Homepage</Link>
          <Link to="/projects" className="btn btn-secondary">View Projects</Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

