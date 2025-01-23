import React ,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRocket, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import './SEOOptimization.css';  // Assuming you will add the corresponding styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // You can choose any icon

function SEOOptimization() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="seo-optimization-page">
      <header className="header">
        <h1>SEO Optimization Services</h1>
        <p>
          Boost your website’s visibility and drive more traffic with our comprehensive SEO
          optimization strategies. We help you achieve top rankings on search engines and enhance
          your online presence.
        </p>
      </header>

      <section className="services">
        <h2>Our SEO Services</h2>
        <div className="services-list">
          <div className="service-item">
            <FontAwesomeIcon icon={faSearch} size="3x" className="service-icon" />
            <h3>Keyword Research</h3>
            <p>
              We analyze search trends to identify the best keywords to help your website rank
              higher and reach your target audience.
            </p>
          </div>

          <div className="service-item">
            <FontAwesomeIcon icon={faRocket} size="3x" className="service-icon" />
            <h3>On-Page Optimization</h3>
            <p>
              Enhance your website’s structure and content to make it more search engine friendly
              and improve user experience.
            </p>
          </div>

          <div className="service-item">
            <FontAwesomeIcon icon={faChartLine} size="3x" className="service-icon" />
            <h3>Analytics & Reporting</h3>
            <p>
              We provide regular performance tracking and actionable insights to help you measure
              SEO progress and make data-driven decisions.
            </p>
          </div>

          <div className="service-item">
            <FontAwesomeIcon icon={faCogs} size="3x" className="service-icon" />
            <h3>Technical SEO</h3>
            <p>
              Improve your site’s technical performance with site speed optimization, mobile
              responsiveness, and proper indexing.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Why Choose Our SEO Optimization Services?</h2>
        <p>
          Our team of SEO experts leverages the latest strategies and tools to improve your
          website’s visibility. We customize our approach to match your business goals and
          ensure long-term success in search engine rankings.
        </p>
      </section>

      <section className="contact">
        <h2>Get Started with SEO Optimization</h2>
        <p>
          Ready to take your website to the next level? Contact us to learn how our SEO services
          can improve your search engine rankings and help your business grow online.
        </p>
        <Link to="/contact" className="cta-icon-link">
          <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="cta-icon" />
          <span className="cta-link-text">Contact Us</span>
        </Link>
      </section>
    </div>
  );
}

export default SEOOptimization;
