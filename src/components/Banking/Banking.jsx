// Banking.jsx
import React from 'react';
import { Shield, ArrowUpRight, DollarSign, LineChart, Settings } from 'lucide-react';
import './Banking.scss';

const Banking = () => {
  return (
    <div className="banking-container">
      <div className="content-wrapperr">
        <div className="banking-header">
          <h2>
            Our set of banking<br />
            <span className="gradient-text">services and offerings</span>
          </h2>
          <button className="view-features-btn">
            View All Features
            <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="services-grid">
          <div className="credit-card-section">
            <div className="card-info">
              <h3>Credit cards</h3>
              <p>
                Get access to our flexible and rewarding credit cards. Enjoy low
                interest rates, cashback options, and exclusive rewards tailored to
                your lifestyle.
              </p>
            </div>
            <div className="cards-container">
              <div className="card">
                <img 
                  src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6737084275f7f15a0f528a20_bank-p-500.png"
                  alt="Credit Card Design"
                  className="card-background"
                />
                <div className="card-content">
                  <div className="card-header">
                    <span>Soroush Nasrpour</span>
                    <span>CVV 341</span>
                  </div>
                  <div className="card-number">6037 9975 9598 3090</div>
                  <div className="card-footer">
                    <span>09/24</span>
                    <span>341</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="security-section">
            <div className="security-icon">
              <Shield size={24} />
            </div>
            <h3>Advanced Security</h3>
            <p>
              Finz uses cutting-edge encryption and multi-factor authentication to
              ensure your financial data stays protected.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <DollarSign size={24} />
            </div>
            <h3>Checking Accounts</h3>
            <p>Manage your finances effortlessly with our easy-to-use checking accounts.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <LineChart size={24} />
            </div>
            <h3>Investments</h3>
            <p>Take control of your future with our investment services.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <Settings size={24} />
            </div>
            <h3>Wealth Management</h3>
            <p>Our expert wealth management team is here to help you build.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banking;