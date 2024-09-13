import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBell, FaUser, FaBox, FaBook, FaStar ,FaMicroblog } from "react-icons/fa";
import "./Navbar.css"; // optional CSS file for styling

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/internship");
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleCourseClick = () => {
    navigate("/course");
  };
  const handleProfilePageClick = () => {
    navigate("/profile");
  };
  const handleStarClick = () => {
    navigate("/blog");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">
          <span className="sparkle-icon">✦</span> Hands-On Heroes
        </span>
      </div>
      <div className="navbar-center">
        <FaBox 
          className="navbar-icon" 
          onClick={handleDashboardClick} 
          style={{ cursor: 'pointer' }} 
        />
        <FaBook 
          className="navbar-icon" 
          onClick={handleCourseClick} 
          style={{ cursor: 'pointer' }} 
        />
        <FaMicroblog  className="navbar-icon"
        onClick={handleStarClick} 
        style={{ cursor: 'pointer' }} />
        <div className="navbar-dots">...</div>
      </div>
      <div className="navbar-right">
        <FaSearch 
          className="navbar-icon" 
          onClick={handleSearchClick} 
          style={{ cursor: 'pointer' }} 
        />
        <FaBell className="navbar-icon" />
        <FaUser 
        className="navbar-icon"
        onClick={handleProfilePageClick} 
        style={{ cursor: 'pointer' }} 
        />
      </div>
    </nav>
  );
};

export default Navbar;