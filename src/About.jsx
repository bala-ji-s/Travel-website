import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-section">
      <h2>About Us</h2>
      <p className="about-description">
        Welcome to our travel website! We are passionate about exploring new 
        destinations and sharing amazing experiences with travelers worldwide.
      </p>

      <div className="about-content">
        <img src="/aboutus.jpg" alt="Travel" className="about-image" />
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>
            Our mission is to make traveling easy, fun, and accessible for 
            everyone. Whether you're looking for adventure, relaxation, or 
            cultural experiences, we've got you covered.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>Expert travel guides</li>
            <li>Personalized trip planning</li>
            <li>Affordable travel packages</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
