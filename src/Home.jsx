import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Book Your Dream Trip Today!</h1>
        <button className="btn" onClick={() => navigate("/explore")}>Explore More</button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="text-content">
          <h2>Popular Destinations</h2>
          <p className="subtext">
            Tours give you the opportunity to see a lot, within a time frame.
          </p>
          <h3>Taal Volcano, Batangas</h3>
          <p>
            One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. The hike up to the crater is a mere
            45 minutes and easy enough for beginners.
          </p>
        </div>

        {/* Image Cards */}
        <div className="card-container">
          <img src="/c1.avif" alt="Destination 1" className="card-image" />
          <img src="/c2.webp" alt="Destination 2" className="card-image" />
        </div>
      </div>
    </div>
  
  );
}

export default Home;
