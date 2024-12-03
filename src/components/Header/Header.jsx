import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pages = [
    { title: 'About us', path: '/about' },
    { title: 'Career', path: '/career' },
    { title: 'Blog', path: '/blog' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Review', path: '/review' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header__logo">
        <img 
          src="https://cdn.prod.website-files.com/6700f419829e38664506b649/672cab61500113ebe881cefd_main-logo.svg" 
          alt="FINZ"
        />
      </div>

      <nav className="header__nav header__nav--desktop">
        <div className="header__nav-links">
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
        </div>
      </nav>

      <button 
        className="header__mobile-menu-toggle"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div 
        className={`header__nav-mobile ${isMobileMenuOpen ? 'header__nav-mobile--open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            toggleMobileMenu();
          }
        }}
      >
        <nav className="header__nav-mobile-content">
          <a href="/" className="header__nav-mobile-link header__nav-mobile-link--active">Home</a>
          <a href="/features" className="header__nav-mobile-link">Features</a>
          
          <div 
            className="header__nav-mobile-dropdown"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="header__nav-mobile-dropdown-trigger">
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
                className={`header__nav-mobile-dropdown-icon ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="header__nav-mobile-dropdown-content">
                {pages.map((page) => (
                  <a 
                    key={page.path} 
                    href={page.path} 
                    className="header__nav-mobile-dropdown-item"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {page.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/pricing" className="header__nav-mobile-link">Pricing</a>
          <a href="/contact-us" className="header__nav-mobile-link">Contact Us</a>

          <div className="header__auth-mobile">
            <a href="/login" className="header__nav-mobile-link">Log in</a>
            <a href="/get-started" className="header__nav-mobile-link header__nav-mobile-link--primary">
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
        </nav>
      </div>

      <div className="header__auth header__auth--desktop">
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