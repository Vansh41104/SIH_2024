import React from 'react';
import { Star, Clock, User, ChevronRight } from 'lucide-react';
import './CoursePage.css';
import Navbar from "../../components/Navbar/Navbar";
// import Background from 'three/src/renderers/common/Background.js';

const CoursePage = () => {
  return (
    <div className="course-page">
        <Navbar />

      <nav>
        <div className="container">
          <p>Home &gt; All Courses &gt; Industrial Chemistry 101</p>
        </div>
      </nav>
    
      <main className="container">
        <div className="main-content">
          <div className="course-info">
            <div className="upper-div">
            <h2 className="ministry">Central Education Ministry</h2>
            <h1 className="course-title">Industrial Chemistry 101</h1>
            <p className="course-description">The basic detail of course lorem45 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            
            <div className="course-meta">
              <div className="meta-item">
                <User size={20} />
                <span>Instructor : Arush Menaria</span>
              </div>
              <div className="meta-item">
                <User size={20} />
                <span>173+ Learners</span>
              </div>
              <div className="meta-item">
                <Clock size={20} />
                <span>Duration : 1 month</span>
              </div>
            </div>
            
            <div className="course-rating">
              <span className="rating">4.8</span>
              <Star size={20} fill="gold" color="gold" />
              <span className="students">105 students</span>
            </div>
            </div>

            <div className="course-tabs">
              <button className="active">About Course</button>
              <button>Prerequisites</button>
              <button>Labs</button>
              <button>Test page</button>
              <button>Material</button>
            </div>

            <div className="course-details">
              <h3>The basic detail of course lorem45</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            </div>
          </div>

          <div className="course-sidebar">
            <div className="sidebar-content">
              <h3>This Course Includes :</h3>
              <ul>
                <li>10.4 hours on-demand videos</li>
                <li>15 Study labs</li>
                <li>Industrial resources access</li>
                <li>Certificate of completion</li>
                <li>Badges and many more !</li>
              </ul>
              <button className="interactive-learning">
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