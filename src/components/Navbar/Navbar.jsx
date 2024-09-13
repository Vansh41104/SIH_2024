import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch, FaBell, FaUser, FaBox, FaBook, FaStar, FaMicroblog } from "react-icons/fa";
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
    <nav className="navbar bg-gray-800 p-4">
      <div className="navbar-left">
        <Link to="/Landingpage" className="navbar-logo text-white text-xl font-bold">
          <span className="sparkle-icon mr-2">✦</span> Hands-On Heroes
        </Link>
      </div>
      <div className="navbar-center">
        <FaBox
          className="navbar-icon text-white mx-2 cursor-pointer"
          onClick={handleDashboardClick}
        />
        <FaBook
          className="navbar-icon text-white mx-2 cursor-pointer"
          onClick={handleCourseClick}
        />
        <FaMicroblog
          className="navbar-icon text-white mx-2 cursor-pointer"
          onClick={handleStarClick}
        />
        <div className="navbar-dots text-white">...</div>
      </div>
      <div className="navbar-right">
        <FaSearch
          className="navbar-icon text-white mx-2 cursor-pointer"
          onClick={handleSearchClick}
        />
        <FaBell className="navbar-icon text-white mx-2" />
        <FaUser
          className="navbar-icon text-white mx-2 cursor-pointer"
          onClick={handleProfilePageClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;