import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"; // Importing icons

function AppFooter() {
  return (
    <section id="contact" className="section">
    <div className="footer">
      <div className="footer-text">
        <h2>Sounds great, right?</h2>
        <h3>Work with us</h3>
      </div>

      {/* WhatsApp Contact */}
      <div className="footer-contact">
        <a
          href="https://wa.me/+918078531945"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <FaWhatsapp className="icon" /> +91 8078531945
        </a> <br/>
        <a
          href="https://wa.me/+918891236906"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <FaWhatsapp className="icon" /> +91 8891236906
        </a>
      </div>

      {/* Connect with us */}
      <div className="footer-connect">
        <h4>Connect with us</h4>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="mailto:joannjkoodathil@gmail.com"
            className="social-link"
          >
            <FaEnvelope className="icon" />
          </a>
          <a
            href="https://www.instagram.com/web.lance_/?utm_source=qr&r=nametag"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
    </div> </section>
  );
}

export default AppFooter;
