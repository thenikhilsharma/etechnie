import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Useful Links */}
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/help-center">Help center</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/venues">Venues</a></li>
            <li><a href="/contact-us">Send us an email</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div className="footer-section">
          <h4>My Account</h4>
          <ul>
            <li><a href="/create-account">Create an account</a></li>
            <li><a href="/sell-tickets">Sell tickets online</a></li>
            <li><a href="/my-tickets">My tickets</a></li>
            <li><a href="/forgot-password">Forgot your password?</a></li>
            <li><a href="/pricing">Pricing and fees</a></li>
          </ul>
        </div>

        {/* Event Categories */}
        <div className="footer-section">
          <h4>Event Categories</h4>
          <ul>
            <li><a href="/concert-music">Concert / Music</a></li>
            <li><a href="/trip-camp">Trip / Camp</a></li>
            <li><a href="/sport-fitness">Sport / Fitness</a></li>
            <li><a href="/cinema">Cinema</a></li>
            <li><a href="/all-categories">All categories</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><strong>Phone:</strong> +123456789</p>
          <p><strong>Fax:</strong> +123456789</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Language and Scroll to Top */}
      <div className="footer-bottom">
        <div className="language">
          <label htmlFor="language-select">Language:</label>
          <select id="language-select">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
        <button className="scroll-to-top">
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;