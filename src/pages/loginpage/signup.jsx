import React, { useState } from 'react';
import './loginpage.css'; // Ensure you have this to apply styles

const Signup = ({ setActiveCard }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert(`Signed up with ${email}`);
  };

  return (
    <div className="container">
      <h2>Create a new account</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="balamia@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="12345678"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
      />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="password"
        placeholder="12345678"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        name="confirm-password"
      />
      <div className="last">
        <button onClick={handleSignup}>Sign Up</button>
        <p>Already Have An Account? <span className="link" onClick={() => setActiveCard('login')}>Login</span></p>
      </div>
    </div>
  );
};

export default Signup;
