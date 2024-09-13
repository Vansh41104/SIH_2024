import React, { useState } from "react";
import "./ProfileEditPage.css";
import { useNavigate } from 'react-router-dom';

function ProfileEdit() {
  const [name, setName] = useState("Enter your name");
  const [dob, setDob] = useState("YYYY/MM/DD");
  const [email, setEmail] = useState("Enter your Email");
  const [address, setAddress] = useState("Enter your address");
  const [gender, setGender] = useState("Select Gender");
  const [contact, setContact] = useState("Enter your mobile number");
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <div className="profile-edit-container">
      <header className="profile-edit-header">
        <div className="profile-edit-info">
          <div className="profile-edit-pic">
            <div className="pic-placeholder"></div>

          </div>
          <h2 className="profile-edit-name">USER NAME</h2>
          <p className="profile-edit-email">xyz34@gmail.com</p>
          <button className="save-profile-edit-btn" onClick={handleClick} >SAVE PROFILE</button>
        </div>
      </header>

      <section className="profile-edit-details">
        <div className="input-group">
          <label>Name:</label>
          <div className="input-wrapper">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button>✎</button>
          </div>
        </div>

        <div className="input-group">
          <label>Date of birth:</label>
          <div className="input-wrapper">
            <input
              type="Date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Email:</label>
          <div className="input-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>✎</button>
          </div>
        </div>

        <div className="input-group">
          <label>Address:</label>
          <div className="input-wrapper">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button>✎</button>
          </div>
        </div>

        <div className="input-group">
          <label>Gender:</label>
          <div className="input-wrapper">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label>Contact:</label>
          <div className="input-wrapper">
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <button>✎</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileEdit;
