import React from 'react';
import './PricingPackage.scss';

const PricingPackage = () => {
  return (
    <section className="pricing-package">
      <div className="pricing-package__header">
        <h2 className="pricing-package__title">
          <span className="pricing-package__title--primary">Our Best</span> Pricing Package
        </h2>
        <p className="pricing-package__description">At Finz, we offer flexible pricing options tailored to meet the needs of individuals and businesses alike</p>
      </div>
      <div className="pricing-package__plans">
        <div className="pricing-package__plan">
          <h3 className="pricing-package__plan-title">Basic Plan</h3>
          <div className="pricing-package__plan-price">$ 29.00 USD</div>
          <p className="pricing-package__plan-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          <hr />
          <ul className="pricing-package__plan-features">
            <li>Unlimited transactions.</li>
            <li>Basic security features.</li>
            <li>Access to standard payment methods.</li>
            <li>Real-time transaction notifications.</li>
            <li>Lorem ipsum dolor sit amet,</li>
          </ul>
          <button className="pricing-package__plan-button">Get Started</button>
        </div>
        <div className="pricing-package__plan standard-plan">
          <h3 className="pricing-package__plan-title">Standard Plan</h3>
          <div className="pricing-package__plan-price">$ 90.00 USD</div>
          <p className="pricing-package__plan-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          <hr />
          <ul className="pricing-package__plan-features">
            <li>All Pro Plan features</li>
            <li>Customized solutions for transactions</li>
            <li>Dedicated account manager</li>
            <li>Tailored analytics and reporting tools</li>
            <li>Multi-user access and roles</li>
          </ul>
          <button className="pricing-package__plan-button">Get Started</button>
        </div>
        <div className="pricing-package__plan">
          <h3 className="pricing-package__plan-title">Executive Plan</h3>
          <div className="pricing-package__plan-price">$ 190.00 USD</div>
          <p className="pricing-package__plan-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          <hr />
          <ul className="pricing-package__plan-features">
            <li>All Basic Plan features</li>
            <li>Advanced security measures</li>
            <li>Priority customer support</li>
            <li>Integration with accounting software</li>
            <li>Monthly spending insights and reports</li>
          </ul>
          <button className="pricing-package__plan-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPackage;