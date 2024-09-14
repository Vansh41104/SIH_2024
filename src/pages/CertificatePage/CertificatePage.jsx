import React from 'react';
import './CertificatePage.css'; 
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const CertificatePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/abc');
  };
  return (
    <div className="certificate-page">

      {/* Certificate Section */}
      <div className="certificate-container">
        <div className="certificate-content">
          <h2>Hands-On Heroes</h2>
          <h3>CERTIFICATE OF COMPLETION</h3>
          <h1>Industrial Chemistry 101</h1>
          <p><strong>John Doe</strong></p>
          <p>Date dd/mm/yyyy</p>
          <p className="description">
            This certificate above verifies that Recipient Name successfully completed the course 
            Industrial Chemistry 101 on dd/mm/yyyy as taught on Vocational Learning App.
            The certificate indicates the entire course was completed as validated by the student.
          </p>
        </div>
        
        {/* Right Section */}
        <div className="certificate-details">
          <h4>Certificate Recipient:</h4>
          <div className="recipient-box">Recipient name</div>
          <h4>About the Course:</h4>
          <div className="course-briefing">Briefing of course</div>
          <div className="ratings">
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
            <p>(Ratings)</p>
          </div>
          <div className="actions">
            <button className="download-button">Download</button>
            <button className="share-button">Share</button>
          </div>
          <p className="update-note">
            Update your certificate with your correct name or preferred language
          </p>
          <button className="abc-button" onClick={handleClick}>Convert to ABC Credits</button>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
