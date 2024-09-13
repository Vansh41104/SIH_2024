import React from "react";
import { FaSearch, FaBell, FaUser, FaBox, FaBook, FaStar } from "react-icons/fa";
import "./Navbar.css"; // optional CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">
          <span className="sparkle-icon">✦</span> Hands-On Heroes
        </span>
      </div>
        <div className="navbar-center">
          <FaBox className="navbar-icon" />
          <FaBook className="navbar-icon" />
          <FaStar className="navbar-icon" />
          <div className="navbar-dots">...</div>
        </div>
        <div className="navbar-right">
        <FaSearch className="navbar-icon" />
        <FaBell className="navbar-icon" />
        <FaUser className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
