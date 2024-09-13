import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TestGuidelinesPage.css';
import Navbar from '../../components/Navbar/Navbar';
const TestGuidelines = () => {
  return (
    <div className="test-page-container">
      <header className="header">
        <div className="logo">Hands-On Heroes</div>
        <div className="header-icons">
          <i className="icon layout"></i>
          <i className="icon book"></i>
          <i className="icon star"></i>
          <i className="icon more"></i>
        </div>
      </header>
      
      <div className="test-content">
        {/* Left Section - Course Info */}
        <div className="course-info">
          <img 
            src="chemistry.png" 
            alt="Industrial Chemistry 101" 
            className="course-image"
          />
          <div className="status-info">
            <p>Status</p>
            <p>Documents 0/0 <input type="checkbox" checked disabled /></p>
            <p>Labs 6/6 <input type="checkbox" checked disabled /></p>
          </div>
          {/* <hr /> */}
        </div>
        <div className="tspg-details">
          <div className="tspg-test-guidelines">
            <h3>Test Guidelines :</h3>
            <p>Format: The test consists of 7 MCQ type questions. Each correct answer carries 2 marks each. No negative marking.</p>
            <p>Stable Internet Connection: Make sure your internet connection is reliable to avoid disconnection during the test.</p>
            <p>Preferred Browser: <strong>Google Chrome</strong></p>
            <p>Confirmation: After submitting, look for a confirmation message to ensure your test has been successfully submitted. Save or screenshot any confirmation number or submission receipt.</p>
          </div>
        </div>
        
        {/* Right Section - Subscription */}
        <div className="subscription-box">
          <label>
            <input type="checkbox" checked disabled />
            By registering for this opportunity, you agree to share the data mentioned in this form with the organizer for further analysis, processing, and outreach.
          </label>
          <label>
            <input type="checkbox" />
            Subscribe to Hands-on Heroes newsletter
          </label>
          
          <p><strong>Time Limit: 1 Hrs</strong></p>
          <button className="proceed-button">Proceed to Test &rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default TestGuidelines;
