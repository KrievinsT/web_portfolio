import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <div className="content-wrapper">
        {/* Hero Section */}
        <div className="hero-section">
          {/* Left Column */}
          <div className="hero-content">
            <h1 className="heading">
              We are the best Online{' '}
              <span className="gradient-text">payment Gateway</span>
            </h1>
            <p className="description">
              At Finz, we offer the most trusted and efficient online payment gateway, helping
              businesses and individuals process transactions effortlessly.
            </p>
            <img
                src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6704fea9d699734ada5abe30_about-img-p-800.jpg"
                alt="womandosomething"
                draggable="false"
              />
            <a href="/about" className="about-btn">
              About Finz
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
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>

          {/* Right Column - Features Grid */}
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="18" rx="2" />
                  <path d="M2 7h20" />
                </svg>
              </div>
              <h3>Seamless Integration</h3>
              <p>Our platform integrates easily with your existing systems.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Global Coverage</h3>
              <p>Accept payments from anywhere in the world.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Secure and Trustworthy</h3>
              <p>Your transactions are safeguarded by industry-leading security protocols.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <h3>Real-Time Analytics</h3>
              <p>Access detailed transaction reports and real-time insights to optimize.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <h2>15+</h2>
          <p>Years Of Experience</p>
        </div>
        <div className="stat-item">
          <h2>140K</h2>
          <p>Active Users</p>
        </div>
        <div className="stat-item">
          <h2>15+</h2>
          <p>User Downloads</p>
        </div>
        <div className="stat-item">
          <h2>18k+</h2>
          <p>User Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default About;