// Landing.jsx
import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="content-wrapper">
        {/* Left Section */}
        <div className="left-section">
          <div className="hero-text">
            <h1>
              Smart Solutions
              <br />
              for{' '}
              <span className="gradient-text">
                Financial
                <br />
                Success
              </span>
            </h1>
            <p>
              Manage, invest, and grow your wealth with smart financial tools.
              Join thousands who trust Finz to simplify their financial journey.
            </p>
            <button className="get-started-btn">
              Get Started
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div className="reviews-section">
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="star">★</span>
              ))}
            </div>
            <p>Over 1K+ Active User's</p>
            <div className="user-avatars">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="avatar-circle" />
              ))}
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-item">
              <h3>16m</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="stat-item">
              <h3>180+</h3>
              <p>Country Available</p>
            </div>
            <div className="stat-item">
              <h3>4.8+</h3>
              <p>Positive Rating</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
    <div className="stacked-cards">
      <div className="card card-3">
        <img 
          src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6712541db7b4e6d53cfc3392_card-03.svg" 
          alt="Credit card 3" 
        />
      </div>
      <div className="card card-2">
        <img 
          src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6712541dffb01213277b2adb_card-02.svg" 
          alt="Credit card 2" 
        />
      </div>
      <div className="card card-1">
        <img 
          src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6712541d3eaec2aef6883815_card-01.svg" 
          alt="Credit card 1" 
        />
      </div>
    </div>
  </div>

      </div>
    </div>
  );
};

export default Landing;