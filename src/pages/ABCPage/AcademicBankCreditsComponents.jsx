import React from 'react';
import './ABC.css'
import { useNavigate } from 'react-router-dom';

const AcademicBankCredits = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="abc-card">
        <div className="abc-header">
          <div className="logo-title">
            <img src="/api/placeholder/50/50" className="logo" />
            <div>
              <h1 id='abch1'>ACADEMIC BANK OF CREDITS</h1>
              <p>Ministry of Education, Government of India</p>
            </div>
          </div>
          <button className="abc-close-btn">×</button>
        </div>

        <div className="user-info">
          <div className="user-details">
            <div className="user-avatar"></div>
            <div>
              <h2 id='abc-h2'>Hello</h2>
              <p className="user-name">User Name</p>
              <p className="credit-points">0 Total Academic Credits Points</p>
            </div>
          </div>
          <div className="abc-credit-card">
            <p className="card-title">ACADEMIC BANK OF CREDITS</p>
            <p>AADHAAR ID</p>
            <p>xxx-xxx-xxx-123</p>
            <p className="card-user-name">User Name</p>
            <p className="card-info">We use basic information from your DigiLocker account to identify you and allow access to ABC platform</p>
          </div>
        </div>

        <div className="no-credit">
          {/* <img src="src\assets\folder.png" alt="Folder icon" className="folder-icon" /> */}
          <p className="no-credit-title">No credit point added yet</p>
          <p>Please provide your AADHAAR ID to Academic Institute to reflect your Credit points here</p>
        </div>

        <button className="abc-pay-btn" onClick={handleClick}>Pay Now</button>
      </div>
    </div>
  );
};

export default AcademicBankCredits;