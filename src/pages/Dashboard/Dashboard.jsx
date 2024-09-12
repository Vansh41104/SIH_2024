import React from 'react';
import './Dashboard.css'; // Import the CSS file
import Navbar from '../../components/Navbar/Navbar';

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />

      <main className="main-content">
        <div className="welcome-section">
            <div className="text">
                <h1>Welcome Back, <br></br>User Name</h1>
                <p>Track your learnings, manage your courses and activity.</p>
            </div>
          <div className="total-learning-time">Total learning time – 20 hrs 17 min</div>
        </div>

        <div className="cards-section">
          <div className="card">
            <h3>Course Enrolled</h3>
            <p>1</p>
          </div>
          <div className="card">
            <h3>Course Completed</h3>
            <p>0</p>
          </div>
        </div>
        <div className="big">
            <div className="assignments-section">
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

            <div className="tests-section">
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
    </div>
  );
}

export default Dashboard;
