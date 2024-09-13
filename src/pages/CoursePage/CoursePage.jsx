import React from 'react';
import { Star, Clock, User, ChevronRight } from 'lucide-react';
import './CoursePage.css';
import Navbar from "../../components/Navbar/Navbar";
// import Background from 'three/src/renderers/common/Background.js';

const CoursePage = () => {
  return (
    <div className="crpg-course-page">
        <Navbar />

      <nav>
        <div className="crpg-course-container">
          <p>Home &gt; All Courses &gt; Industrial Chemistry 101</p>
        </div>
      </nav>
    
      <main className="crpg-container">
        <div className="crpg-main-content">
          <div className="crpg-course-info">
            <div className="crpg-upper-div">
            <h2 className="crpg-ministry">Central Education Ministry</h2>
            <h1 className="crpg-course-title">Industrial Chemistry 101</h1>
            <p className="crpg-course-description">The basic detail of course lorem45 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            
            <div className="crpg-course-meta">
              <div className="crpg-meta-item">
                <User size={20} />
                <span>Instructor : Arush Menaria</span>
              </div>
              <div className="crpg-meta-item">
                <User size={20} />
                <span>173+ Learners</span>
              </div>
              <div className="crpg-meta-item">
                <Clock size={20} />
                <span>Duration : 1 month</span>
              </div>
            </div>
            
            <div className="crpg-course-rating">
              <span className="crpg-rating">4.8</span>
              <Star size={20} fill="gold" color="gold" />
              <span className="crpg-students">105 students</span>
            </div>
            </div>

            <div className="crpg-course-tabs">
              <button className="crpg-active">About Course</button>
              <button>Prerequisites</button>
              <button>Labs</button>
              <button>Test page</button>
              <button>Material</button>
            </div>

            <div className="crpg-course-details">
              <h3>The basic detail of course lorem45</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            </div>
          </div>

          <div className="crpg-course-sidebar">
            <div className="crpg-sidebar-content">
              <h3>This Course Includes :</h3>
              <ul>
                <li>10.4 hours on-demand videos</li>
                <li>15 Study labs</li>
                <li>Industrial resources access</li>
                <li>Certificate of completion</li>
                <li>Badges and many more !</li>
              </ul>
              <button className="crpg-interactive-learning">
                <span>Interactive Learning</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
}
export default CoursePage;
