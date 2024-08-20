import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">Oops! The page you're looking for can't be found.</p>
      <br />
      <a href="/" className="error-link">Return to Home</a>
    </div>
  );
}

export default Error;
