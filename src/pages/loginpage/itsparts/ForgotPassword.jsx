import React, { useState } from 'react';


const ForgotPassword = ({ setActiveCard }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    alert(`Recovery email sent to ${email}`);
    setActiveCard('recovery-email-sent');
  };

  return (
    <div className="container">
      <h2>Recover Account</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="balamia@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <div className="last">
        <button onClick={handleForgotPassword}>Send Recovery Email</button>
        <p>Back To Login Page? <span className="link" onClick={() => setActiveCard('login')}>Login</span></p>
      </div>
    </div>
  );
};

export default ForgotPassword;
