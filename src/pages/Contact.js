import React, { useEffect } from 'react';
import '../styles/Contact.css';

function Contact() {
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <h1 className="contact-heading">Get in Touch</h1>
      <p className="contact-subheading">
        We value your feedback! Use the form below to connect with us.
      </p>

      {/* Embedded Google Form */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdDTEpkD7OTSZnJHDEQl-pBkr43tE9rQvAR5PIBq796lIIAbg/viewform?embedded=true"
        title="Contact Form"
        className="google-form-iframe"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default Contact;
