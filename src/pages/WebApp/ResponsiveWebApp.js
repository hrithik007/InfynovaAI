import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faDesktop, faTabletAlt, faCode, faChartLine, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './ResponsiveWebApp.css'; // Include responsive styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // You can choose any icon
import image from '../../assets/responsive.jpg';

function ResponsiveWebApp() {
  return (
    <div className="responsive-page-container">
      <header className="responsive-header-container">
        <h1>Responsive Web Application Development</h1>
        <p>
          Build dynamic, mobile-friendly web applications tailored to your business needs. 
          Our solutions deliver exceptional performance across devices.
        </p>
        <img 
          src={image} 
          alt="Responsive Web App Development" 
          className="responsive-header-image" 
        />
      </header>

      <section className="container features-section-container">
        <h2 className='text-center' style={{"marginTop":"20px","marginBottom":"20px"}}>Why Choose Our Responsive Web Apps?</h2>
        <div className="container features-list-container">
          <div className="feature-item-container">
            <FontAwesomeIcon icon={faMobileAlt} size="3x" className="feature-icon-container" />
            <h3>Mobile Optimization</h3>
            <p>Our web apps are optimized for seamless performance on smartphones.</p>
          </div>

          <div className="feature-item-container">
            <FontAwesomeIcon icon={faTabletAlt} size="3x" className="feature-icon-container" />
            <h3>Tablet Compatibility</h3>
            <p>Enjoy responsive design that scales perfectly on tablets.</p>
          </div>

          <div className="feature-item-container">
            <FontAwesomeIcon icon={faDesktop} size="3x" className="feature-icon-container" />
            <h3>Desktop Performance</h3>
            <p>Experience high-speed performance on desktop devices.</p>
          </div>

          <div className="feature-item-container">
            <FontAwesomeIcon icon={faCode} size="3x" className="feature-icon-container" />
            <h3>Modern Code Standards</h3>
            <p>We follow the latest coding practices to ensure maintainability and scalability.</p>
          </div>

          <div className="feature-item-container">
            <FontAwesomeIcon icon={faChartLine} size="3x" className="feature-icon-container" />
            <h3>Business Insights</h3>
            <p>Our apps empower you with data-driven insights for better decision-making.</p>
          </div>

          <div className="feature-item-container">
            <FontAwesomeIcon icon={faUserCheck} size="3x" className="feature-icon-container" />
            <h3>User-Friendly Design</h3>
            <p>Intuitive interfaces ensure a seamless user experience across all platforms.</p>
          </div>
        </div>
      </section>

      <section className="cta-section-container">
        <h2>Ready to Elevate Your Web Presence?</h2>
        <p>
          Partner with us to create responsive web applications that deliver outstanding performance and user satisfaction. 
          Let’s turn your vision into reality.
        </p>
        <Link to="/contact" className="cta-icon-link">
  <FontAwesomeIcon icon={faPhoneAlt} size="3x" className="cta-icon" /> <br />Contact Us
</Link>

      </section>
    </div>
  );
}

export default ResponsiveWebApp;
