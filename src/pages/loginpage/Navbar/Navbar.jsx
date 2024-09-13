import React from "react";
import {Link } from "react-router-dom";
import { FaSearch, FaBell, FaUser, FaBox, FaBook, FaStar } from "react-icons/fa";
import "./Navbar.css"; // optional CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">
        <Link to="/" className="navbar-logo">
          <span className="sparkle-icon">✦</span> Hands-On Heroes
        </Link>
        </span>
      </div>
        
    </nav>
  );
};

export default Navbar;
