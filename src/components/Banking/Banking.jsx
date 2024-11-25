import React from 'react';
import { Shield, ArrowUpRight, DollarSign, LineChart, Settings } from 'lucide-react';
import './Banking.scss';

const CreditCard = ({ style }) => (
    <img 
      src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6737084275f7f15a0f528a20_bank-p-500.png"
      alt="Credit Card"
      className="card"
      style={style}
    />
  );
  
  const Banking = () => {
    return (
      <div className="banking-container">
        <div className="content-wrap">
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
                <CreditCard />
              </div>
            </div>
  
            <div className="security-section">
              <div className="security-icon">
                <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/67062e524dc8385304da9f45_feature-icon-01.svg" alt="Shield" className="icon" />
              </div>
              <h3>Advanced Security</h3>
              <p>
                Finz uses cutting-edge encryption and multi-factor authentication to
                ensure your financial data stays protected.
              </p>
            </div>
  
            <div className="service-item">
              <div className="service-icon">
                <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/67062e3f3c0f63393c694453_feature-icon-02.svg" alt="Dollar Sign" className="icon" />
              </div>
              <h3>Checking Accounts</h3>
              <p>Manage your finances effortlessly with our easy-to-use checking accounts.</p>
            </div>
  
            <div className="service-item">
              <div className="service-icon">
                <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/67062e3f6f3052c5cdcbba21_feature-icon-03.svg" alt="Line Chart" className="icon" />
              </div>
              <h3>Investments</h3>
              <p>Take control of your future with our investment services.</p>
            </div>
  
            <div className="service-item">
              <div className="service-icon">
                <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/67062e3f293d219c3ce94766_feature-icon-04.svg" alt="Settings" className="icon" />
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