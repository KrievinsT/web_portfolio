import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">FINZ</div>
      <nav className="header__nav">
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/pages">Pages</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact-us">Contact Us</a>
      </nav>
      <div className="header__auth">
        <a href="/login" className="header__auth-link">Log in</a>
        <a href="/get-started" className="header__auth-link header__auth-link--primary">Get Started</a>
      </div>
    </header>
  );
};

export default Header;