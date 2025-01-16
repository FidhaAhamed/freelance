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
        "Single Page",
        "Shopify Theme",
        "Mobile Responsive",
        "payment gateway ",
  
        "1 month revision",
        "Hosting setup"
      ]
    },
    {
      title: "Website + SEO",
      description: "SEO helps you grow your business! We specialize in this! Let us help you get more business.",
      buttonText: "See Pricing",
      isPopular: true,
      features: [
        "3 pages",
        "Basic social integration",
        "2 plugin",
        "Basic SEO optimization ",
        "Mobile responsive",
        "Contact Form Integration ",
        "All device responsive",
        "Speed Optimization",
        "Hosting setup"
      ]
    },
    {
      title: "Build Your Own Package",
      description: "We create high-performance websites, e-commerce stores, and automation tools with custom designs, advanced SEO, and seamless integrations and more. Businesses choose us because we care!",
      buttonText: "Get a Custom Quote",
      features: [
        "+ Unlimited Pages",
        "+ Customized Theme",
        "+ Advanced Social Media Integration",
        "+ Hosting Setup",
        "+ Customized Plugins",
        "+ Advanced SEO Optimization",
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