import React from "react";
import "./Services.css";

function Services() {
  const servicesList = [
    { id: 1, text: "Custom Development" },
    { id: 2, text: "User Experience Optimization" },
    { id: 3, text: "Security Audits & Remediation" },
    { id: 4, text: "Site Speed Audits & Optimization" },
    { id: 5, text: "Custom Theme Development" },
    { id: 6, text: "24x7x365 Critical Site Support" },
    { id: 7, text: "Integrations" },
    { id: 8, text: "Automation" },
    { id: 9, text: "Conversion Rate Optimization" },
    { id: 10, text: "Replatforming / Full Platform Migrations" },
    { id: 11, text: "Synthetic Browser Testing" },
    { id: 12, text: "Technology Evaluations" },
    { id: 13, text: "Solutions Consulting" },
    { id: 14, text: "Accessibility / ADA" },
    { id: 15, text: "Headless / PWA" },
    { id: 16, text: "Complex Projects" }
  ];

  return (
    <section id="service"className="services-section section">
      <div className="services-container">
        <h2 className="services-heading">What we do</h2>
        <hr className="services-divider" />
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