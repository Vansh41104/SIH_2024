import React from "react";
import "./FourthPage.css";

function FourthPage() {
  return (
    <div className="landing-page-container">
      <div className="left-section">
        <h1>Start To learn and connect with us!</h1>
        <div className="feature">
          <div className="icon">
            <img
              src="https://img.icons8.com/ios/50/000000/web-design.png"
              alt="Interact"
            />
          </div>
          <div className="text">
            <h3>Interact with other students and grow your network</h3>
            <button className="start-btn">Start ➔</button>
          </div>
        </div>
        <div className="feature">
          <div className="icon">
            <img
              src="https://img.icons8.com/ios/50/000000/document.png"
              alt="Explore"
            />
          </div>
          <div className="text">
            <h3>Explore the internship opportunities available</h3>
            <button className="explore-btn">Explore ➔</button>
          </div>
        </div>
      </div>
      <div className="right-section">
      </div>
    </div>
  );
}

export default FourthPage;
