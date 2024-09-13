import React from "react";
import "./FifthPage.css";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function FifthPage() {
  return (
    <div className="FifthApp">
      {/* Banner Section */}
      <div className="banner">
        <h1>Empowering you to turn knowledge into action.</h1>
      </div>

      {/* Footer Section */}
      <div className="fifth-footer">
        <div className="fifth-footer-content">
          <div className="logo">
            <span className="logo-star">✦</span> Hands-On Heros
          </div>

          <div className="fifth-footer-columns">
            <div className="fifth-footer-column">
              <h3>Useful Links</h3>
              <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>Partnerships</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="fifth-footer-column">
              <h3>Resources</h3>
              <ul>
                <li>Documentation</li>
                <li>Support</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className="fifth-footer-column">
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>Partnerships</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="fifth-footer-column">
              <h3>Social</h3>
              <ul className="social-icons">
                <li><FaGithub /></li>
                <li><FaLinkedin /></li>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default FifthPage;
