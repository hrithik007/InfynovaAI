// src/pages/Services.js
import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      
      <div className="service-card">
        <h2>Web App Development</h2>
        <p>Build custom, scalable, and high-performance web applications tailored to your business needs.</p>
      </div>

      <div className="service-card">
        <h2>Data Analytics & Power BI</h2>
        <p>Unlock business insights with our data analytics services and interactive Power BI dashboards.</p>
      </div>
    </div>
  );
}

export default Services;
