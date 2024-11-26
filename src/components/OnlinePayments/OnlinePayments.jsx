// OnlinePayments.jsx
import React from 'react';
import './OnlinePayments.scss';
import onlinePaymentImage from '../../assets/online-left.jpg';

const OnlinePayments = () => {
  return (
    <div className="online-payments-container">
      <div className="content-wrapist">
        <div className="header-container">
        </div>
        <div className="main-content">
          <div className="image-container">
            <h2 className="section-title">4 Quick Steps To Use Finable Online Payments</h2>
            <img src={onlinePaymentImage} alt="Online Payment" className="online-payment-image" />
          </div>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3 className="step-title">Download Finz App</h3>
              <p className="step-description">Download the Finz app. Easy to install.</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3 className="step-title">Create Account</h3>
              <p className="step-description">Enter details, verify info, link accounts.</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3 className="step-title">Choose Payments</h3>
              <p className="step-description">Select credit, debit, or digital wallets.</p>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3 className="step-title">Start Transaction</h3>
              <p className="step-description">Secure payments, transfers, bill pay.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinePayments;