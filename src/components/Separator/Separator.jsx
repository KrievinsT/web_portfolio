// Separator.jsx
import React from 'react';
import './Separator.scss';

const Separator = () => {
  // Array of actual image URLs
  const separatorItems = [
    'https://cdn.prod.website-files.com/6700f419829e38664506b649/67122823adeea9a063a7e30c_hero-icon-02.svg',
    'https://cdn.prod.website-files.com/6700f419829e38664506b649/6704efd5532e6852265f263d_logo-04.svg',
    'https://cdn.prod.website-files.com/6700f419829e38664506b649/6704efd5d699734ada4c3dae_logo-03.svg',
    'https://cdn.prod.website-files.com/6700f419829e38664506b649/6704efd517ec70d44233cf92_logo-02.svg',
    'https://cdn.prod.website-files.com/6700f419829e38664506b649/6704efd596bdc0b07af321f6_logo-01.svg',
  ];

  return (
    <div className="logo-separator">
      <div className="scroll-container">
        {/* First set of items */}
        {separatorItems.map((src, index) => (
          <img
            key={`first-${index}`}
            src={src}
            alt="separator item"
          />
        ))}
        {/* Duplicate set for seamless loop */}
        {separatorItems.map((src, index) => (
          <img
            key={`second-${index}`}
            src={src}
            alt="separator item"
          />
        ))}
      </div>
    </div>
  );
};

export default Separator;