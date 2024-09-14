import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = ({ setActiveCard }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    // Perform your login logic here
    // alert(`Logged in with ${email}`);
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div className="container">
      <h2>Login to your account</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="balamia@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label htmlFor="password">Password</label>
        <span className="forgot-password link" onClick={() => setActiveCard('forgot-password')}>Forgot?</span>
      </div>
      <input
        type="password"
        placeholder="12345678"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
      />
      <div className="last">
        <button onClick={handleLogin}>Login now</button>
        <p>Don't Have An Account? <span className="link" onClick={() => setActiveCard('signup')}>Sign Up</span></p>
      </div>
    </div>
  );
};

export default Login;
