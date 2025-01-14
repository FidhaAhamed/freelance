import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="abtsection section">
      <div className="about-container">
        <h2 className="about-heading">Who we are</h2>
        <hr className="divider" />
        <p className="about-description">
        We are a freelance web development team based in Ernakulam, Kerala, specializing in creating high-performance e-commerce websites. Our team of skilled developers focuses on delivering seamless, scalable, and user-friendly digital experiences tailored to your business needs. We don’t just build websites—we create smart, efficient solutions that drive growth and streamline operations. From concept to launch and beyond, we’re here to help you succeed in the digital landscape.
        </p>
        <p className="about-description">
          If you’re a brand or retailer seeking more specialized expertise from your agency, it’s time
          to partner with a team that truly knows how to deliver.
        </p>
      </div>
    </section>
  );
}

export default About;
