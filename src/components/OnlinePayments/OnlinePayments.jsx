// OnlinePayments.jsx
import React from 'react';
import './OnlinePayments.scss';
import onlinePaymentImage from '../../assets/online-left.jpg';

const OnlinePayments = () => {
  return (
    <div className="online-payments-container">
      <div className="content-wrapper">
        <h2 className="section-title">
          4 Quick Steps To Use<br />
          Finable Online Payments
        </h2>

        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">1</div>
            <h3 className="step-title">Download Finz App</h3>
            <p className="step-description">
              Get started by downloading the Finz app from the App Store or Google
              Play. It's lightweight, easy to install, and gets you set up in no time.
            </p>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <h3 className="step-title">Create Your Account</h3>
            <p className="step-description">
              Enter your basic details, verify your information, and securely link your
              bank accounts or payment methods within minutes.
            </p>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <h3 className="step-title">Choose Your Payments</h3>
            <p className="step-description">
              Select from a variety of payment methods including credit cards, debit
              cards, or digital wallets.
            </p>
          </div>

          <div className="step-item">
            <div className="step-number">4</div>
            <h3 className="step-title">Start Your Transaction</h3>
            <p className="step-description">
              With everything set, you're ready to make secure payments, transfer
              money, or pay bills with just a few taps.
            </p>
          </div>
        </div>

        <img src={onlinePaymentImage} alt="Online Payment" className="online-payment-image" />
      </div>
    </div>
  );
};

export default OnlinePayments;