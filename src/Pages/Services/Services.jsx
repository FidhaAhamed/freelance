import React from "react";
import "./Services.css";

function Services() {
  const servicesList = [
  
      { "id": 1, "text": "Custom E-commerce Websites" },
      { "id": 2, "text": "Static Business Websites" },
      { "id": 3, "text": "Mobile-Responsive Designs" },
      { "id": 4, "text": "Product Upload & Setup" },
      { "id": 5, "text": "Premium Themes & Customization" },
      { "id": 6, "text": "SEO Optimization" },
      { "id": 7, "text": "Plugins & Extensions" },
      { "id": 8, "text": "Speed Optimization" },
      { "id": 9, "text": "Hosting & Domain Assistance" },
      { "id": 10, "text": "Social Media Integration" },
      { "id": 11, "text": "Email Marketing Tools" },
      { "id": 12, "text": "Contact Form & Lead Capture" },
      { "id": 13, "text": "Security & Performance Enhancements" },
      { "id": 14, "text": "Unlimited Revisions" },
      { "id": 15, "text": "Ongoing Support & Maintenance" },
      { "id": 16, "text": "Scalable Solutions" }
  
  
  ];

  return (
    <section id="service"className="services-section section">
      <div className="services-container">
        <h2 className="services-heading">What we do</h2>
        <div className="services-grid">
          <div className="services-column">
            {servicesList.slice(0, 8).map((service) => (
              <div key={service.id} className="service-item">
                <span className="service-number">{service.id}</span>
                <span className="service-text">{service.text}</span>
              </div>
            ))}
          </div>
          <div className="services-column">
            {servicesList.slice(8).map((service) => (
              <div key={service.id} className="service-item">
                <span className="service-number">{service.id}</span>
                <span className="service-text">{service.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;