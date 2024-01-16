import React from 'react';
import '../Footer/footer.css';
import logo from '../icons/fin_logo.png'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <h4>Newsletter & Special Promo</h4>
        <input type="email" placeholder="Enter your email here" />
        <button>Subscribe</button>
      </div>
      <div className="footer-links">
        <img src={logo} alt="Logo" className="footer-logo" />
        {/* navigation component */}
        <nav>
          <a href="/about">About us</a>
          <a href="/services">Services & Facilities</a>
          <a href="/faq">FAQ</a>
          {/*other links as needed */}
        </nav>
      </div>
      <div className="footer-bottom">
        © 2024 Hotel Booking System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
