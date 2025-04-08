import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Navbarstyle.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navitems">
      <h1 className="navbar-logo">Tourism</h1>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fa fa-times" : "fa fa-bars"}></i>
      </button>

      <ul className={isOpen ? "nav-menu mobile-active" : "nav-menu"}>
        <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
        <li><Link to="/about"><i className="fa fa-cloud"></i> About</Link></li>
        <li><Link to="/service"><i className="fa-brands fa-servicestack"></i> Service</Link></li>
        <li><Link to="/contact"><i className="fa-solid fa-address-book"></i> Contact</Link></li>
      </ul>

      <button className="signup-btn">
        <Link to="/signup"><i className="fa-solid fa-user"></i> Signup</Link>
      </button>
    </nav>

  );
}

export default Navbar;
