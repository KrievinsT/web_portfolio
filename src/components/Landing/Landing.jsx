import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1>Smart Solutions for Financial Success</h1>
        <p>Manage, invest, and grow your wealth with smart financial tools. Join thousands who trust Finz to simplify their financial journey.</p>
        <a href="#" className="get-started">Get Started</a>
      </div>
      <div className="cards">
        <div className="card">
          <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6712541d3eaec2aef6883815_card-01.svg" alt="Card 1" />
        </div>
        <div className="card">
          <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6712541dffb01213277b2adb_card-02.svg" alt="Card 2" />
        </div>
        <div className="card">
          <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6712541db7b4e6d53cfc3392_card-03.svg" alt="Card 3" />
        </div>
      </div>
      <div className="stats">
        <div className="stats-item">
          <h2>16m</h2>
          <p>Satisfied Clients</p>
        </div>
        <div className="stats-item">
          <h2>180+</h2>
          <p>Country Available</p>
        </div>
        <div className="stats-item">
          <h2>4.8+</h2>
          <p>Positive Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;