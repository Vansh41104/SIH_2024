import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setActiveCard }) => {
  const navigate = useNavigate();

  useEffect(() => {
  
    google.accounts.id.initialize({
      client_id: '357073439690-d8mn6ge1eplpq9ont779k0ii2f28alav.apps.googleusercontent.com', 
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' } 
    );
  }, []);

  const handleCredentialResponse = (response) => {
    console.log('Encoded JWT ID token: ' + response.credential);
   
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2>Create a new account</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="balamia@gmail.com"
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="12345678"
        name="password"
      />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="password"
        placeholder="12345678"
        name="confirm-password"
      />
      <div id="google-signin-button"></div>
      <div className="last">
        <button>Sign Up</button>
        <p>Already Have An Account? <span className="link" onClick={() => setActiveCard('login')}>Login</span></p>
      </div>
    </div>
  );
};

export default Signup;
