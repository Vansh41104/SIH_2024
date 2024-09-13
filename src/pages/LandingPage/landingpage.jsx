import React from 'react';
import './Landingpage.css';
import Navbar from '../../components/Navbar/Navbar';
const Landingpage = () => {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <section className="hero">
        <div className="hero-content">
          <h1>Single Platform for all your Learnings</h1>
          <button className="cta-button">Start Now</button>
        </div>
      </section>

      {/* Explore Courses Section */}
      <section className="courses-section">
        <h2>Explore Our World's Best Courses</h2>
        <div className="courses-filter">
          <button className="filter-btn active">Top Courses</button>
          <button className="filter-btn">Chemistry</button>
          <button className="filter-btn">Physics</button>
          <button className="filter-btn">Development</button>
        </div>
        <div className="course-cards">
          <div className="course-card">
            <img src="chemistry.png" alt="Course" />
            <h3>Industrial Chemistry 101</h3>
            <p>Learn the fundamentals of chemical reactions.</p>
            <button className="enroll-btn">Enroll Now</button>
          </div>
          <div className="course-card">
            <img src="chemistry.png" alt="Course" />
            <h3>Industrial Chemistry 101</h3>
            <p>Learn the fundamentals of chemical reactions.</p>
            <button className="enroll-btn">Enroll Now</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Let the Best Course Find You!</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="icon ai-icon"></i>
            <p>AI-Powered Career Guidance</p>
          </div>
          <div className="feature-item">
            <i className="icon lab-icon"></i>
            <p>Virtual Labs and Simulations</p>
          </div>
          <div className="feature-item">
            <i className="icon progress-icon"></i>
            <p>Check Your Progress</p>
          </div>
          <div className="feature-item">
            <i className="icon certificate-icon"></i>
            <p>Get Certificates and Badges</p>
          </div>
        </div>
      </section>

      {/* Connect and Learn Section */}
      <section className="connect-section">
        <h2>Start to Learn and Connect with Us!</h2>
        <div className="connect-grid">
          <div className="connect-item">
            <p>Interact with other students and grow your network</p>
            <button className="connect-btn">Start</button>
          </div>
          <div className="connect-item">
            <p>Explore internship opportunities</p>
            <button className="connect-btn">Explore</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Empowering you to turn knowledge into action.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="/careers">Careers</a>
        </div>
        <div className="social-links">
          <a href="/linkedin">LinkedIn</a>
          <a href="/facebook">Facebook</a>
          <a href="/instagram">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;
