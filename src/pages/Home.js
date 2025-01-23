import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Add your custom styles

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Innovative IT Solutions Tailored for Your Business Growth</h1>
          <p>Specializing in web development, data analytics, and transformative IT solutions to accelerate your business performance.</p>
          <Link to="/services" className="cta-button">Explore Our Expertise</Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>At DevpulseAnalytics, we pride ourselves on delivering cutting-edge IT solutions that help businesses transform and scale. Our expertise spans web app development, data analytics, and the implementation of robust Power BI solutions tailored to each client's specific needs.</p>
      </section>



{/* Our Mission Section */}
<section className="mission">
  <h2 className="mission-title">Our Mission</h2>
  <div className="container">
    <div className="row align-items-center">
      {/* Image Section */}
      <div className="col-md-6 img1">
     
      </div>
      {/* Text Section */}
      <div className="col-md-6  mission-content">
        <p className="mission-intro">
          Our mission is to empower businesses through innovative and efficient solutions. We focus on:
        </p>
        <ul className="mission-points">
          <li>
            <i className="fas fa-cogs mission-icon"></i> 
            <div>
              <strong>Enhancing Efficiency:</strong>
              <p>Delivering technology that streamlines your operations and reduces complexity.</p>
            </div>
          </li>
          <li>
            <i className="fas fa-lightbulb mission-icon"></i> 
            <div>
              <strong>Driving Innovation:</strong>
              <p>Building cutting-edge solutions tailored to your business needs.</p>
            </div>
          </li>
          <li>
            <i className="fas fa-chart-line mission-icon"></i> 
            <div>
              <strong>Fostering Growth:</strong>
              <p>Enabling sustainable and scalable success through seamless integration and precision.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>




{/* Our Values Section */}
<section className="values">
  <div className="values-content">
    <h2 className="values-title">Our Core Values</h2>
    <ul className="values-list">
      <li>
        <i className="fas fa-handshake values-icon"></i>
        <div>
          <strong>Integrity:</strong>
          <p>We uphold transparency, trust, and ethical practices in every project we deliver.</p>
        </div>
      </li>
      <li>
        <i className="fas fa-lightbulb values-icon"></i>
        <div>
          <strong>Innovation:</strong>
          <p>We continuously adopt the latest technologies to ensure your business remains competitive and future-ready.</p>
        </div>
      </li>
      <li>
        <i className="fas fa-users values-icon"></i>
        <div>
          <strong>Collaboration:</strong>
          <p>We work closely with clients to understand their unique challenges and offer personalized solutions.</p>
        </div>
      </li>
      <li>
        <i className="fas fa-trophy values-icon"></i>
        <div>
          <strong>Excellence:</strong>
          <p>We strive for excellence in every aspect of our work, from development to customer service.</p>
        </div>
      </li>
    </ul>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>With a proven track record of success, DevpulseAnalytics is your trusted partner in technology. Here’s why companies trust us with their digital transformation:</p>
        <ul>
          <li><i className="fas fa-check-circle"></i> Proven expertise in developing scalable, high-performance web applications</li>
          <li><i className="fas fa-check-circle"></i> Comprehensive data analytics and reporting solutions powered by Power BI</li>
          <li><i className="fas fa-check-circle"></i> Dedicated team focused on delivering timely and cost-effective solutions</li>
          <li><i className="fas fa-check-circle"></i> Long-term partnerships with clients, built on trust and shared success</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
