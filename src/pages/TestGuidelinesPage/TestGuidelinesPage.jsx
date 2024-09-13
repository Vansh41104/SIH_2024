import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TestGuidelinesPage.css';
import Navbar from '../../components/Navbar/Navbar';

const TestGuidelines = () => {
  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate('/quiz');
  };

  return (
    <div className="test-page-container">
      <Navbar />
      
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
        </div>
        
        {/* Middle Section - Test Guidelines */}
        <div className="test-guidelines">
          <h2>Industrial Chemistry 101</h2>
          <hr />
          <h3>Test Guidelines :</h3>
          <p>Format: The test consists of 7 MCQ-type questions, each correct answer carries 2 marks, and <strong>No negative marking</strong>.</p>
          <p><strong>Stable Internet Connection:</strong> Make sure your internet connection is reliable to avoid disconnection during the test.</p>
          <p><strong>Preferred Browser:</strong> Google Chrome</p>
          <p><strong>Confirmation:</strong> After submitting, look for a confirmation message to ensure your test has been successfully submitted. Save or screenshot any confirmation number or submission receipt.</p>
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
          <button 
            className="proceed-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleProceedClick}
          >
            Proceed to Test &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestGuidelines;