import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    // Handle form submission (e.g., send to server)
  };

  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact Us</h1>
      
  

      {/* Embedded Google Form */}
      <div className="google-form">
        
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdDTEpkD7OTSZnJHDEQl-pBkr43tE9rQvAR5PIBq796lIIAbg/viewform?embedded=true"
          width="640"
          height="710"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact Form"
          className="google-form-iframe"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Contact;
