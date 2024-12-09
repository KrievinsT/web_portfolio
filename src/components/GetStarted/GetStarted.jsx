import React from 'react';
import './GetStarted.scss';

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <div className="get-started-content">
        <div className="get-started-text-wrapper">
          <h2 className="get-started-title">Ready to Get Started?</h2>
          <p className="get-started-description">
           Take control of your financial transactions with Finable. Our intuitive platform makes it easy to manage payments, track spending, and ensure secure transactions.
          </p>
        </div>
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
};

export default GetStarted;