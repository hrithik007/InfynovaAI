import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faFacebook, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Services Section */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/ecommerce-app">Ecommerce App</Link></li>
            <li><Link to="/responsive-web-app">Responsive Web App</Link></li>
            <li><Link to="/digital-marketing">Digital Marketing</Link></li>
            <li><Link to="/seo-optimization">SEO Optimization</Link></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* Data Analytics Section */}
        <div className="footer-section">
          <h4>Data Analytics</h4>
          <div className="dropdown-row">
            <Link to="/data-analytics">Data Analytics</Link>
            <Link to="/power-bi-report">Power BI Report</Link>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61572640581088" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/projectmanagers2025/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>

        {/* Office Information Section */}
        <div className="footer-section">
          <h4>Our Office</h4>
          <address>
            <p><strong>DevPulse Analytics Pvt. Ltd.</strong></p>
            <p>Head Office:</p>
            <p>436, Bhawani Twin Towers, Kolkata, India</p>
            <p>Phone: <FontAwesomeIcon icon={faPhoneAlt} /> +91 7044234671</p>
            <p>Branch Office:</p>
            <p>Supertech Eco Village2, B-8 1607, Delhi, India</p>
            <p>Phone: <FontAwesomeIcon icon={faPhoneAlt} /> +91 90970 93514</p>
            <p>Email: <FontAwesomeIcon icon={faEnvelope} /> projectmanagers@devpulseanalytics.com</p>
          </address>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 DevPulse Analytics. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
