import React from 'react';
import './GetStarted.scss';

const Start = () => {
  return (
    <div className="start-container">
      <div className="start-content">
        <div className="start-line"></div>
        <div className="start-text">Ready to Get Started?</div>
        <div className="start-line"></div>
      </div>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
};

export default Start;