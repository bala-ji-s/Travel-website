import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaBehance, FaTwitter } from "react-icons/fa"; // Social Icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & Tagline */}
        <div className="footer-brand">
          <h2>Tourism</h2>
          <p>Explore the world with us.</p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div>
            <h3>Discover</h3>
            <ul>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Travel Guides</a></li>
              <li><a href="#">Adventures</a></li>
              <li><a href="#">Special Offers</a></li>
            </ul>
          </div>

          <div>
            <h3>Community</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Travel Stories</a></li>
              <li><a href="#">Forums</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h3>Support</h3>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookies Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaBehance className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
