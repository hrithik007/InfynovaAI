import React from 'react';
import './DataAnalytics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faLightbulb, faUserFriends } from '@fortawesome/free-solid-svg-icons';

function DataAnalytics() {
  return (
    <div className="data-analytics-page">
      <header className="data-analytics-header">
        <h1>Data Analytics Solutions</h1>
        <p>
          Unlock the potential of your data to make informed decisions and drive business growth.
          Our comprehensive data analytics services empower businesses to transform raw data into actionable insights.
        </p>
      </header>

      <div className="container">
        <section className="benefits-section container">
          <div className="benefit-item">
            <div className="benefit-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h2>Predictive Analytics</h2>
            <p>
              Leverage machine learning algorithms to forecast trends and customer behavior.
              Predictive analytics helps you make proactive decisions and stay ahead of the competition.
            </p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h2>Improved Decision Making</h2>
            <p>
              Make data-driven decisions with clarity and confidence. Our solutions provide real-time analytics,
              ensuring that you have the right information at the right time.
            </p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
            <h2>Enhanced Customer Insights</h2>
            <p>
              Understand your customers' preferences and behaviors. Tailor your products, services, and marketing
              strategies to maximize customer satisfaction and loyalty.
            </p>
          </div>
        </section>
      </div>

      <footer className="cta-section">
        <h3>Ready to transform your business with data analytics?</h3>
        <p>
          Contact us today to explore how we can help you harness the power of data to drive your business forward.
        </p>
        <a href="/contact" className="cta-button">Get Started</a>
      </footer>
    </div>
  );
}

export default DataAnalytics;
