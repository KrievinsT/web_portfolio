import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CustomerReviews.scss';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      quote: "Finz has completely transformed the way I handle online payments. The app is intuitive, secure, and incredibly fast. I can't imagine going back to my old payment methods!",
      author: "Sarah Thompson",
      role: "Financial Analyst",
      avatar: "https://cdn.prod.website-files.com/6700f419829e38664506b649/67075151c1db4a0e9d15b046_review-01.jpg"
    },
    {
      quote: "As a small business owner, I appreciate how easy it is to integrate Finz payment solutions into my e-commerce platform. It has streamlined transactions.",
      author: "David Martin",
      role: "Owner, Martin's E-commerce Store",
      avatar: "https://cdn.prod.website-files.com/6700f419829e38664506b649/67075151606d868d79cd5e92_review-02.jpg"
    },
    {
      quote: "I've never felt more in control of my finances. The real-time analytics give me insights into my spending, which helps me manage my budget effectively.",
      author: "Emma Rodriguez",
      role: "Budget Consultant",
      avatar: "https://cdn.prod.website-files.com/6700f419829e38664506b649/670751517c22eda58b8f49cd_review-03.jpg"
    },
    {
      quote: "Customer service is top-notch. I've had an issue, the Finz support team has been quick to respond and resolve the problem efficiently.",
      author: "James Anderson",
      role: "IT Manager, Techbridge Solutions",
      avatar: "https://cdn.prod.website-files.com/6700f419829e38664506b649/6707515124f5106892c468da_review-04.jpg"
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div className="customer-reviews">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-title--primary">What Our</span> Customers Say
        </h2>
        <div className="controls">
          <button className="prev-btn" onClick={handlePrevClick}>
            <ChevronLeft size={24} />
          </button>
          <button className="next-btn" onClick={handleNextClick}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`review-card ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            <blockquote>{review.quote}</blockquote>
            <div className="reviewer">
              <div className="avatar">
                <img 
                  src={review.avatar} 
                  alt={`${review.author}'s profile`} 
                  className="avatar-image"
                />
              </div>
              <div>
                <h4>{review.author}</h4>
                <p>{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;