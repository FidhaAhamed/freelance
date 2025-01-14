import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  const reviews = [
    {
      image: "/api/placeholder/48/48",
      name: "JOMON K PHILIP",
      title: "CEO",
      company: "KOODATHIL CONSTRUCTIONS",
      review: "I am extremely happy with the website  created for my construction company. They delivered a clean, professional, and user-friendly design that perfectly suits my business. The team was responsive, efficient, and completed the project on time. I highly recommend them for anyone looking for a high-quality website!."
    }
    // Add more reviews as needed
  ];

  return (
    <div className="page-container">
      <div className="testimonial-container">
        {/* People Icon */}
        <div className="icon-container">
          <svg 
            className="people-icon"
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.62c0-1.17.68-2.25 1.76-2.73 1.17-.51 2.61-.9 4.24-.9zM12 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          </svg>
        </div>

        {/* Main Text */}
        <h1 className="main-heading">
          We've worked with the best clients,
          <br />
          and we'd be happy to work with you!
        </h1>

        {/* Subtitle */}
        <p className="subtitle">
          Check out what people say about us and our services!
        </p>

        {/* Logo Grid */}
        
      </div>

      {/* Reviews Section */}
      <div className="reviews-container">
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
               
                <div className="review-title">
                  <h3 className="review-name">{review.name}</h3>
                  <p className="review-position">
                    {review.title}, {review.company}
                  </p>
                </div>
              </div>
              <p className="review-text">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;