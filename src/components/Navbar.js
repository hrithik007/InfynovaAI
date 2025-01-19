import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import '../styles/Navbar.css';

function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAboutClick = () => {
    navigate('/InfynovaAI');
    setTimeout(() => {
      const contactSection = document.getElementById('about');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Close dropdown when navbar menu is toggled
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);  // Toggle dropdown visibility
  };

  return (
    <>
      {/* Contact Info Row */}
  {/* Contact Info Row */}
<div className="contact-info">
  <div className="container d-flex justify-content-between">
    <span className="social-email">
      <i className="fas fa-envelope"></i> {/* Font Awesome Email Icon */}
      hrithik.jais2013@gmail.com
    </span>
    <div className="social-icons">
      <a className='icons' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>

     <a className='icons' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</div>


      {/* Navbar */}
     <div className='navbar2'>
     <nav className="container navbar">
        <div className="navbar-logo">
          <h2>InfynovaAI</h2>
        </div>
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/InfynovaAI">Home</Link>

          {/* Services Dropdown */}
          <div className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
            <div className="dropbtn" onClick={toggleDropdown}>Services</div>
            <div className={`dropdown-content ${dropdownOpen ? 'active' : ''}`}>
              <div className="dropdown-row">
                <h4>Web App Development</h4>
                <Link to="/ecommerce-app">Ecommerce App</Link>
                <Link to="/responsive-web-app">Responsive Web App</Link>
                <Link to="/digital-marketing">Digital Marketing</Link>
                <Link to="/seo-optimization">SEO Optimization</Link>
              </div>
              <div className="dropdown-row">
                <h4>Data Analytics</h4>
                <Link to="/data-analytics">Data Analytics</Link>
                <Link to="/power-bi-report">Power BI Report</Link>
              </div>
            </div>
          </div>

          <Link onClick={handleAboutClick} style={{ cursor: 'pointer' }}>About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Hamburger Menu - Font Awesome icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <i className="fa fa-bars"></i> {/* Font Awesome hamburger icon */}
        </div>
      </nav>
     </div>
    </>
  );
}

export default NavBar;
