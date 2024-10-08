import React from 'react';
import { useNavigate } from "react-router-dom";
import { AiOutlineRobot } from "react-icons/ai"; // Import the chatbot icon from React Icons
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  const navigate = useNavigate();

  const handleCertificateClick = () => {
    navigate("/certificate");
  };
  const handleCourseClick = () => {
    navigate("/course");
  };
  const handleLabsClick = () => {
    navigate("/labs");
  };
  const handleQuizClick = () => {
    navigate("/testguidelinespage");
  };

  const handleChatbotClick = () => {
    navigate("/chat");
  };

  return (
    <div className="dashboard">
      <main className="main-content-dash">
        <div className="welcome-section">
          <div className="text">
            <h1>Welcome Back, <br></br>Jhon Doe</h1>
            <p>Track your learnings, manage your courses and activity.</p>
          </div>
          <div className="total-learning-time">Total learning time – 20 hrs 17 min</div>
        </div>

        <div className="cards-section">
          <div className="card" onClick={handleCourseClick} style={{ cursor: 'pointer' }}>
            <img src="src/assets/openbook.png" alt="" />
            <h3>Course Enrolled</h3>
            <p>1</p>
          </div>
          <div className="card" onClick={handleCertificateClick} style={{ cursor: 'pointer' }}>
            <img src="src/assets/certificate.png" alt="" />
            <h3>Course Completed</h3>
            <p>0</p>
          </div>
        </div>

        <div className="big">
          <div className="assignments-section" onClick={handleLabsClick} style={{ cursor: 'pointer' }}>
            <h3>Assignment</h3>
            <div className="assignment-item">
              <span>Chemical Reaction</span>
              <span>Due in 3 days</span>
            </div>
            <div className="assignment-item">
              <span>Chemical Reaction</span>
              <span>Due in 3 days</span>
            </div>
          </div>

          <div className="tests-section" onClick={handleQuizClick} style={{ cursor: 'pointer' }}>
            <h3>Tests</h3>
            <div className="test-item">
              <span>Chemical Reaction</span>
              <span>Due in 3 days</span>
            </div>
            <div className="test-item">
              <span>Chemical Reaction</span>
              <span>Due in 3 days</span>
            </div>
          </div>
        </div>
      </main>

      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={handleChatbotClick}>
        <AiOutlineRobot size={50} color="#000022" />
      </div>
    </div>
  );
}

export default Dashboard;
