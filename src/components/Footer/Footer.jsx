import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="logo-and-description">
          <div className="description-and-button">
          <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/672cab61500113ebe881cefd_main-logo.svg" alt="Finz Logo" className="footer-logo" />
            <p className="footer-description">Manage, invest, and grow your wealth with smart financial tools. Join thousands who trust [Fintech Company Name] to simplify their financial journey.</p>
          </div>
          <a href="#" className="open-account-btn">Open a free account today</a>
        </div>
      <div className="footer-content">

        <div className="quick-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div className="resources">
          <h3 className="footer-title">Resources</h3>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="authentication">
          <h3 className="footer-title">Authentication</h3>
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Forgot Password</a></li>
          </ul>
        </div>
        <div className="utility-pages">
          <h3 className="footer-title">Utility Pages</h3>
          <ul>
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">Change Log</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">404 Page</a></li>
            <li><a href="#">Protected</a></li>
          </ul>
        </div>
        <div className="location">
          <h3 className="footer-title">Location</h3>
          <p>501 Locust Ln Willits, California(CA), 95490</p>
          <div className="contact-info">
            <p>+1 (406) 555-0120</p>
            <p>hello@example.com</p>
          </div>
          <div className="follow-us">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6704d0102e4c4d35c4b6fa0e_facebook.svg" alt="Facebook" />
              </a>
              <a href="#" className="social-link">
                <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/672cb177b472dea57665f3aa_linked.svg" alt="LinkedIn" />
              </a>
              <a href="#" className="social-link">
                <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6704d0105710143ed4223102_instagram.svg" alt="Instagram" />
              </a>
              <a href="#" className="social-link">
                <img src="https://cdn.prod.website-files.com/6700f419829e38664506b649/6704d00f84dcbf95a56e9edf_youtube.svg" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Finz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;