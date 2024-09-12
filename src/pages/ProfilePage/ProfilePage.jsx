import React from 'react';
import './ProfilePage.css'; // Import the CSS file for styling
import Navbar from '../../components/Navbar/Navbar'; // Import the Navbar component

const ProfilePage = () => {
  return (
    <div className="profile-page">
        <Navbar />
        <div className="profile-header-section">
          <div className="profile-picture">
            <img src="profile_placeholder.png" alt="Profile" />
          </div>
          <div className="profile-info">
            <h2>Ishi Bhavsar</h2>
            <p>ishibhavsar41@gmail.com</p>
            <button>Edit Profile</button>
          </div>
        </div>
    <div className="profile">
        <div className="profile-container">
            <div className="profile-details">
            <div className="details-form">
                <label>Name</label>
                <input type="text" />
                <label>Date of Birth</label>
                <input type="date" />
                <label>Gender</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Contact</label>
                <input type="text" />
                <label>Address</label>
                <input type="text" />
            </div>
            </div>
        </div>
        <div className="profile-container">
            <div className="profile-details">
            <div className="achievements">
                <img src="src\assets\Badge.png" alt="" />
                <img src="src\assets\Badge.png" alt="" />
                <img src="src\assets\Badge.png" alt="" />
                <img src="src\assets\Badge.png" alt="" />
                <img src="src\assets\Badge.png" alt="" />
                <img src="src\assets\Badge.png" alt="" />

            </div>
            </div>
        </div>
        </div>
        </div>
  );
}

export default ProfilePage;