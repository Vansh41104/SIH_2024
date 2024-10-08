import React from 'react';


const RecoveryEmailSent = ({ setActiveCard }) => {
  return (
    <div className="container">
      <h2>Recovery Email Sent</h2>
      <p>Please check your email for recovery instructions.</p>
      <div className="last">
        <button onClick={() => setActiveCard('login')}>Back to Login</button>
      </div>
    </div>
  );
};

export default RecoveryEmailSent;
