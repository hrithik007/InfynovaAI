import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faChartLine, faSearch, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './DigitalMarketing.css';  // Assuming you will add the corresponding styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function DigitalMarketing() {
  return (
    <div className="digital-marketing-page">
      <header className="header">
        <h1>Digital Marketing Solutions</h1>
        <p>
          Drive your brand’s success with our professional digital marketing services. From SEO
          optimization to social media management, we help you reach new audiences and boost your
          online presence.
        </p>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <FontAwesomeIcon icon={faBullhorn} size="3x" className="service-icon" />
            <h3>Brand Awareness</h3>
            <p>
              Expand your brand’s reach and build strong connections with your target audience
              through strategic marketing campaigns.
            </p>
          </div>

          <div className="service-item">
            <FontAwesomeIcon icon={faChartLine} size="3x" className="service-icon" />
            <h3>SEO & Analytics</h3>
            <p>
              Optimize your website and content for search engines to increase visibility, drive
              traffic, and improve conversion rates.
            </p>
          </div>

          <div className="service-item">
            <FontAwesomeIcon icon={faSearch} size="3x" className="service-icon" />
            <h3>Content Marketing</h3>
            <p>
              Craft engaging content that attracts and retains customers. From blog posts to
              videos, we create compelling content that resonates.
            </p>
          </div>

          <div className="service-item">
            <FontAwesomeIcon icon={faHandshake} size="3x" className="service-icon" />
            <h3>Social Media Management</h3>
            <p>
              Build your social presence by crafting meaningful interactions and creating viral
              content across various platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          We are a team of digital marketing experts dedicated to delivering results. Our approach is
          data-driven, focusing on innovative strategies tailored to your business needs. From small
          startups to large enterprises, we have the skills and experience to elevate your online
          presence.
        </p>
      </section>

      <section className="contact">
        <h2>Get In Touch</h2>
        <p>
          Ready to take your business to the next level? Contact us today for a personalized
          consultation and discover how we can help grow your brand.
        </p>
       <Link to="/contact">
       <button className="contact-btn">Contact Us</button></Link>
      </section>
    </div>
  );
}

export default DigitalMarketing;
