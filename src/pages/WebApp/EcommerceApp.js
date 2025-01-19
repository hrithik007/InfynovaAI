import React, { useEffect } from "react";
import "../../styles/EcomerceApp.css"; // Assuming you have a custom CSS for this component

const EcommerceApp = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Introduction Section */}
      <section className="intro-section ecommercebackground">
        <div className="container text-center d-flex flex-column justify-content-center blurred-text-background" style={{ height: "65vh", position: "relative" }}>
          <div>
            <h1 className="display-4">Welcome to Our E-Commerce Platform</h1>
            <p className="lead">
              A role-based platform offering exclusive products with features for Admins and Users.
            </p>
            <a href="#features" className="btn btn-primary btn-lg mt-3">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section text-center py-5">
        <div className="container">
          <h2 className="display-4 mb-4">Features</h2>
          <p className="lead blurred-text-background mb-5">
            Explore the powerful functionalities available for Admins and Users.
          </p>
          <div className="row g-4">
            {/* Admin Features */}
            <div className="col-md-6">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h3 className="card-title" style={{ color: "blue" }}>
                    <i className="fas fa-user-shield me-2"></i> Admin Features
                  </h3>
                  <ul className="list-unstyled mt-3">
                    <li>Manage products, categories, and users</li>
                    <li>Efficiently handle orders and user profiles</li>
                    <li>Send automated email notifications for order status updates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Features */}
            <div className="col-md-6">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h3 className="card-title" style={{ color: "green" }}>
                    <i className="fas fa-user me-2"></i> User Features
                  </h3>
                  <ul className="list-unstyled mt-3">
                    <li>Register and log in securely</li>
                    <li>Place orders and track their status</li>
                    <li>Manage your profile and preferences</li>
                    <li>Recover accounts with the "Forgot Password" functionality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Gateway Section */}
      <section className="payment-gateway-section py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-4">Integrated Payment Gateway</h2>
          <p className="lead mb-5">
            Secure and seamless payment options for users to complete transactions effortlessly.
          </p>
          <div className="row justify-content-center g-4">
            <div className="col-md-3">
              <div className="payment-card">
                <i className="fab fa-cc-visa payment-icon"></i>
                <p className="mt-3">Visa</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="payment-card">
                <i className="fab fa-cc-mastercard payment-icon"></i>
                <p className="mt-3">Mastercard</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="payment-card">
                <i className="fab fa-cc-paypal payment-icon"></i>
                <p className="mt-3">PayPal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Dashboard Section */}
      <section className="admin-dashboard-section py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-4">Admin Dashboard</h2>
          <p className="lead blurred-text-background">
            Access the powerful Admin Dashboard with full control over platform functionalities.
          </p>
          <div className="admin-dashboard-image"></div>
          <p className="mt-4 blurred-text-background">
            Manage products, categories, users, and more through the comprehensive Admin Dashboard.
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section text-center py-5 technologysection">
        <div className="container">
          <h2 className="display-4 mb-5" style={{ color: "#28a745" }}>
            Technologies Used
          </h2>
          <div className="row justify-content-center g-4">
            <div className="col-6 col-md-2">
              <div className="tech-card">
                <div className="tech-icon java"></div>
                <div className="mt-2"><strong>Java</strong></div>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="tech-card">
                <div className="tech-icon springboot"></div>
                <div className="mt-2"><strong>Spring Boot</strong></div>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="tech-card">
                <div className="tech-icon mysql"></div>
                <div className="mt-2"><strong>MySQL</strong></div>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="tech-card">
                <div className="tech-icon bootstrap"></div>
                <div className="mt-2"><strong>Bootstrap</strong></div>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="tech-card">
                <div className="tech-icon thymeleaf"></div>
                <div className="mt-2"><strong>Thymeleaf</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcommerceApp;
