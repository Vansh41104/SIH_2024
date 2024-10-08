import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TestGuidelinesPage.css';
import { FaCheckSquare } from 'react-icons/fa';

const TestPage = () => {
  const navigate = useNavigate();
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleProceedClick = () => {
    if (isAgreedToTerms && isSubscribed) {
      navigate('/quiz');
    }
  };

  return (
    <div className="tspg-test-page">
      <div className="lefttspg">
        <div className="tspg-content">
          <div className="tspg-upside">
            <div className="tspg-image-container">
              <img src="./../src/assets/testguidelineimg.png" alt="Industrial Chemistry" />
              <h2>Industrial Chemistry 101</h2>
            </div>
            <div className="tspg-status">
              <p>Status</p>
              <p>Documents &nbsp; 0/0 &nbsp;&nbsp; <FaCheckSquare className="tspg-icon" /></p>
              <p>Labs &nbsp;  6/6 &nbsp;&nbsp; <FaCheckSquare className="tspg-icon" /></p>
            </div>
          </div>
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
      </div>
      <div className="righttspg">
        <div className="tspg-contentt">
          <div className="tspg-subscription">
            <label className="tspg-subscription-label">
              <input
                type="checkbox"
                className="tspg-checkbox"
                checked={isAgreedToTerms}
                onChange={(e) => setIsAgreedToTerms(e.target.checked)}
              />
              <p className='nayi'>
                By registering for this opportunity, you agree to share the data mentioned in this form or any form henceforth on this opportunity with the organizer of this opportunity for further analysis, processing, and outreach. Your data will also be used by Hands-on Heros for providing you regular and constant updates on this opportunity. You also agree to the privacy policy and terms of use of Hands-on Heros.
              </p>
            </label>
            <label className="tspg-subscription-label">
              <input
                type="checkbox"
                className="tspg-checkbox"
                checked={isSubscribed}
                onChange={(e) => setIsSubscribed(e.target.checked)}
              />
              Subscribe Hands-on Heroes newsletter
            </label>
          </div>
          <div className="tspg-footer">
            <p>Time Limit: <strong>1 Hr</strong></p>
            <button
              className={`tspg-proceed-button ${!(isAgreedToTerms && isSubscribed) ? 'disabled' : ''}`}
              onClick={handleProceedClick}
              disabled={!(isAgreedToTerms && isSubscribed)}
            >
              Proceed to Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
