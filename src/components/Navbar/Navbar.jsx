import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch, FaBell, FaUser, FaBox, FaBook, FaStar, FaMicroblog } from "react-icons/fa";
import "./Navbar.css"; // Make sure to define these styles in Navbar.css

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
        <Link to="/Landingpage" className="navbar-logo">
          <span className="sparkle-icon">✦</span> Hands-On Heroes
        </Link>
      </div>
      <div className="navbar-center">
        <FaBox
          className="navbar-icon"
          onClick={handleDashboardClick}
        />
        <FaBook
          className="navbar-icon"
          onClick={handleCourseClick}
        />
        <FaMicroblog
          className="navbar-icon"
          onClick={handleStarClick}
        />
        <div className="navbar-dots">...</div>
      </div>
      <div className="navbar-right">
        <FaSearch
          className="navbar-icon"
          onClick={handleSearchClick}
        />
        <FaBell className="navbar-icon" />
        <FaUser
          className="navbar-icon"
          onClick={handleProfilePageClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
