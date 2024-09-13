import React from 'react';
import { FaComments, FaFlask, FaChartLine, FaPencilAlt, FaBookOpen, FaCertificate } from 'react-icons/fa'; // Importing specific icons
import './ThirdPage.css';

function ThirdPage() {
    return (
        <div className="third-landing-page">
          <h1>Let The Best Course Find You!</h1>
    
          <div className="third-features">
            <div className="third-features-item">
              <FaComments className="icon" />
              <p>AI-Powered Carrier Guidance</p>
            </div>
    
            <div className="third-features-item">
              <FaFlask className="icon" />
              <p>Virtual labs and simulations</p>
            </div>
    
            <div className="third-features-item">
              <FaChartLine className="icon" />
              <p>Check your progress through assessment</p>
            </div>
    
            <div className="third-features-item">
              <FaPencilAlt className="icon" />
              <p>Tests base system</p>
            </div>
    
            <div className="third-features-item">
              <FaBookOpen className="icon" />
              <p>Virtual labs and simulations</p>
            </div>
    
            <div className="third-features-item">
              <FaCertificate className="icon" />
              <p>Get certificate and badges</p>
            </div>
          </div>
        </div>
      );
    
}

export default ThirdPage;
