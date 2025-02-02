import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"; // Importing icons

function AppFooter() {
  return (
    <section id="contact" className="section">
    <div className="footer">
      <div className="footer-text">
        <h2>Sounds great, right?</h2>
        {/*<h3>Work with us</h3>*/}
      </div>

      {/* WhatsApp Contact
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
      </div> */}

      {/* Connect with us */}
      <div className="footer-connect">
        <h4>Connect with us</h4>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/fidha-ahamed/"
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
            href="https://www.instagram.com/web.design_24?igsh=MXE4cWx4ZmZsN3Ywcg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
       {/* Copyright Section */}
       <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} Design and developed by 
            <a href="https://github.com/FidhaAhamed" target="_blank" rel="noopener noreferrer"> Fidha Ahamed</a> and 
            <a href="https://github.com/Joann-jk" target="_blank" rel="noopener noreferrer"> Joann J Koodathil</a>. All rights reserved.
          </p>
        </div>
    </div> </section>
  );
}

export default AppFooter;
