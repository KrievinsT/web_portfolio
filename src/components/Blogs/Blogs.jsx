import React from 'react';
import './Blogs.scss';

const BlogCard = ({ image, category, title, href }) => (
  <div className="blog-card">
    <img src={image} alt={title} className="blog-image" />
    <div className="blog-content">
      <div className="blog-meta">
        <span className="blog-category">{category}</span>
      </div>
      <h3 className="blog-title">{title}</h3>
      <a href={href} className="blog-link">
        Learn More →
      </a>
    </div>
  </div>
);

const Blogs = () => {
  const blogData = [
    {
      image: 'https://cdn.prod.website-files.com/670525f790e4a8d2c70fa496/670776d9690323eea0156002_blog-thumb08.jpg',
      category: 'Cryptocurrency - October 21, 2024',
      title: 'A Beginner\'s Guide to Cryptocurrency Payments',
      href: '#'
    },
    {
      image: 'https://cdn.prod.website-files.com/670525f790e4a8d2c70fa496/670776ce8231c5f2467ae488_blog-thumb07.jpg',
      category: 'Security - October 21, 2024',
      title: 'The Importance of Data Security in Financial Transactions',
      href: '#'
    },
    {
      image: 'https://cdn.prod.website-files.com/670525f790e4a8d2c70fa496/670776b2e02e991a837095d4_blog-thumb06.jpg',
      category: 'Business Tips - October 21, 2024',
      title: 'How to Avoid Common Payment Processing Mistakes',
      href: '#'
    },
    {
      image: 'https://cdn.prod.website-files.com/670525f790e4a8d2c70fa496/6707767be36b15eeaa100839_blog-thumb03.jpg',
      category: 'Finance Basics - October 21, 2024',
      title: 'Understanding Payment Gateway Fees',
      href: '#'
    },
    {
      image: 'https://cdn.prod.website-files.com/670525f790e4a8d2c70fa496/670776678fbcb2930ea1c78c_blog-thumb02.jpg',
      category: 'Security - October 21, 2024',
      title: '5 Essential Tips for Secure Online Transactions',
      href: '#'
    },
    {
      image: 'https://cdn.prod.website-files.com/670525f790e4a8d2c70fa496/6707765c83d107b494241b4d_blog-thumb01.jpg',
      category: 'Industry Trends - October 21, 2024',
      title: 'Navigating the Future of Online Payments',
      href: '#'
    }
  ];

  return (
    <div className="blogs-container">
      <div className="blogs-content">
        <div className="blogs-header">
          <h2 className="blogs-title">
            Latest <span className="gradient-text">Blogs & News</span>
          </h2>
          <a href="#" className="view-all-link">
            View All →
          </a>
        </div>
        <div className="blogs-grid">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              category={blog.category}
              title={blog.title}
              href={blog.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;