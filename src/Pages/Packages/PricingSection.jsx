import React from 'react';
import './PricingSection.css';

const PackageCard = ({ title, description, features, buttonText, isPopular }) => (
  <div className="package-card">
    {isPopular && <div className="popular-badge">BEST VALUE</div>}
    <h3 className="package-title">{title}</h3>
    <p className="package-description">{description}</p>
   
    <ul className="features-list">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          <span className="checkmark">✓</span>
          <span dangerouslySetInnerHTML={{ __html: feature }} />
        </li>
      ))}
    </ul>
    
  </div>
);

const PricingSection = () => {
  const packages = [
    {
      title: "Just Website",
      description: "If you don't want to grow your traffic, but want a website, or to get more conversions from your current traffic – this is for you!",
      buttonText: "See Pricing",
      features: [
        "Custom Design of All Pages",
        "Up to 2 Home Page Mockups Provided",
        "Up to 10 hours revisions on Home Page",
        "Shopify, Wordpress, WIX, Squarespace",
        "eCommerce - Functionality",
        "Lead Generation Functionality",
        "3 months Complimentary Warranty",
        "3 months Complimentary Hosting"
      ]
    },
    {
      title: "Website + SEO",
      description: "SEO helps you grow your business! We specialize in this! Let us help you get more business.",
      buttonText: "See Pricing",
      isPopular: true,
      features: [
        "Title Tags + Meta Tags + Alt Tags + Schemas",
        "10 Targeted Keywords per Website",
        "SEO Keyword-Targeting Page Outlines",
        "Up to 500 Words / SEO Copywriting",
        "Google Analytics",
        "Search Console Setup",
        "Internal SEO Audit, and Site Speed Audit",
        "1 FAQ Page for Organic Keyword Targeting",
        "SEO Preservation if needed"
      ]
    },
    {
      title: "Build Your Own Package",
      description: "We build CRMs, Marketing Automation tools, databases, drip campaigns, and more. Businesses choose us because we care!",
      buttonText: "Get a Custom Quote",
      features: [
        "+ Custom Plugins",
        "+ Marketing Automation",
        "+ CRM Integrations",
        "+ Backend Databases",
        "+ Custom Workflows",
        "+ Client Portals",
        "+ Animation and Effects",
        "+ Let us build your dream site!"
      ]
    }
  ];

  return (
    <section id="pricing" className="section">
    <div className="pricing-section">
      <div className="pricing-content">
        <h2 className="pricing-title">Our Packages</h2>
        <p className="pricing-subtitle">
          Ready to re-vamp your current website or build a new website with us ?
        </p>
        <p className="pricing-contact">
          Email us for more information: <a href="mailto:joannjkoodathil@gmail.com">joannjkoodathil@gmail.com</a> Why choose us?
        </p>
        
        
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </div></section>
  );
};

export default PricingSection;