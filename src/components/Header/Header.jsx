// Header.jsx
import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pages = [
    { title: 'About us', path: '/about' },
    { title: 'Career', path: '/career' },
    { title: 'Blog', path: '/blog' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Review', path: '/review' }
  ];

  return (
    <header className="header">
      <div className="header__logo">
        <img 
          src="https://cdn.prod.website-files.com/6700f419829e38664506b649/672cab61500113ebe881cefd_main-logo.svg" 
          alt="FINZ"
        />
      </div>
      
      <nav className="header__nav">
        <a href="/" className="header__nav-link header__nav-link--active">Home</a>
        <a href="/features" className="header__nav-link">Features</a>
        <div 
          className="header__nav-dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="header__nav-link header__nav-dropdown-trigger">
            Pages
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="header__nav-dropdown-content">
              {pages.map((page) => (
                <a 
                  key={page.path} 
                  href={page.path} 
                  className="header__nav-dropdown-item"
                >
                  {page.title}
                </a>
              ))}
            </div>
          )}
        </div>
        <a href="/pricing" className="header__nav-link">Pricing</a>
        <a href="/contact-us" className="header__nav-link">Contact Us</a>
      </nav>

      <div className="header__auth">
        <a href="/login" className="header__auth-link">Log in</a>
        <a href="/get-started" className="header__auth-link header__auth-link--primary">
          Get Started
          <svg 
            width="16" 
            height="16" 
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
    </header>
  );
};

export default Header;