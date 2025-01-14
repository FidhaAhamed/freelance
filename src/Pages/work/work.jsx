import React from "react";
import "./work.css";

const Work = () => {
  return (
    <section id="workflow" className="section">
    <div className="how-we-work">
      <h1>How we work</h1>
      <div className="work-steps">
        <div className="step">
          <div className="step-number1">1</div>
          <div className="step-content">
            <h2>Design Phase</h2>
            <p>
            Every business is unique, and so is our design approach. We create visually appealing, user-friendly designs tailored to your brand’s identity and business goals.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h2>Development Phase</h2>
            <p>
            Bringing designs to life with the latest technologies, we build high-performance, responsive, and functional websites that offer seamless user experiences.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-number3">3</div>
          <div className="step-content">
            <h2>Hosting Phase</h2>
            <p>
            Your website needs a secure and reliable home. We provide high-speed hosting solutions to ensure smooth performance, uptime, and security.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-number4">4</div>
          <div className="step-content">
            <h2>Maintenance & Support Phase</h2>
            <p>
            We don’t just build and leave – we ensure your website stays optimized, secure, and updated. Our maintenance services cover six months of continuous support, updates, and performance enhancements to keep your site running flawlessly.
            </p>
          </div>
        </div>
      </div>
    </div></section>
  );
};

export default Work;
