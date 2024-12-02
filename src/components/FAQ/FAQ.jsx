import React from 'react';
import './FAQ.scss';

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-content">
        <div className="faq-header">
          <h2>FAQ's: Write in the customer's voice</h2>
        </div>
        <div className="faq-section">
          <div className="faq-questions">
            <div className="faq-question">What is Finz ?</div>
            <div className="faq-question">How do I get started with Finz ?</div>
            <div className="faq-question">What payment methods does Finz support?</div>
            <div className="faq-question">Is my financial data safe with Finz ?</div>
            <div className="faq-question">Can I track my spending with Finz ?</div>
            <div className="faq-question">What if I encounter issues with my account?</div>
            <div className="faq-question">Are there any hidden fees?</div>
            <div className="faq-question">Can I upgrade or downgrade my plan?</div>
          </div>
          <div className="faq-image">
            <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/670766a2606d868d79e13582_faq-img.jpg" alt="FAQ" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;