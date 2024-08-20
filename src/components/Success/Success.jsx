import React from 'react';
import './Success.css';

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        <div className="party-emoji">🎉</div>
        <h1 className="success-title">Payment Successful!</h1>
        <p className="success-message">Thank you for your purchase. Your order is being processed.</p>
        <br />
        <a href="/" className="success-link">Return to Home</a>
      </div>
      <div className="confetti"></div>
    </div>
  );
}

export default Success;
