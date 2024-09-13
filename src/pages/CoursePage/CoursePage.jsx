import React, { useState } from 'react';
import { Star, Clock, User, ChevronRight } from 'lucide-react';
import './CoursePage.css';
import Navbar from "../../components/Navbar/Navbar";

// Tab Components
const AboutCourse = () => (
  <div>
    <h3>The basic detail of course lorem45</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
  </div>
);

const Prerequisites = () => (
  <div>
    <h3>Prerequisites</h3>
    <p>Details about the prerequisites of the course.</p>
  </div>
);

const Labs = () => (
  <div>
    <h3>Labs Related to project:</h3>
    <p>Information about the labs included in the course.</p>
    <button className="crpg-interactive-learning" >
                <span>Labs page</span>
                <ChevronRight size={20} />
              </button>
  </div>
);

const TestPage = () => (
  <div>
    <h3>Test Related to projects:</h3>
    <p>Details about the test pages and assessments.</p>
    <button className="crpg-interactive-learning">
                <span>Test Page</span>
                <ChevronRight size={20} />
              </button>
  </div>
);

const Material = () => (
  <div>
    <h3>Materials Related to Course:</h3>
    <p>Information about the course material and resources.</p>
  </div>
);

// Main CoursePage Component
const CoursePage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutCourse />;
      case 'prerequisites':
        return <Prerequisites />;
      case 'labs':
        return <Labs />;
      case 'testPage':
        return <TestPage />;
      case 'material':
        return <Material />;
      default:
        return null;
    }
  };

  return (
    <div className="crpg-course-page">
      {/* <Navbar /> */}

      <nav>
        <div className="crpg-course-container">
          <p>Home &gt; All Courses &gt; Industrial Chemistry 101</p>
        </div>
      </nav>

      <div className="crpg-container">
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
              <button className={activeTab === 'about' ? 'crpg-active' : ''} onClick={() => setActiveTab('about')}>About Course</button>
              <button className={activeTab === 'prerequisites' ? 'crpg-active' : ''} onClick={() => setActiveTab('prerequisites')}>Prerequisites</button>
              <button className={activeTab === 'labs' ? 'crpg-active' : ''} onClick={() => setActiveTab('labs')}>Labs</button>
              <button className={activeTab === 'testPage' ? 'crpg-active' : ''} onClick={() => setActiveTab('testPage')}>Test page</button>
              <button className={activeTab === 'material' ? 'crpg-active' : ''} onClick={() => setActiveTab('material')}>Material</button>
            </div>

            <div className="crpg-course-details">
              {renderTabContent()}
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
      </div>
    </div>
  );
};

export default CoursePage;
