import React, { useState } from 'react';
import { Star, Clock, User, ChevronRight } from 'lucide-react';
import './CoursePage.css';
// import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from 'react-router-dom';

// Tab Components
const AboutCourse = () => (
  <div>
    <h3>The basic detail of course lorem45</h3>
    <p>Chemical Production & Process Design: Overview of industrial processes for producing chemicals, polymers, fuels, and other products. Emphasis on process optimization and efficiency.

Catalysis: Understanding the role of catalysts in speeding up chemical reactions and their importance in industrial applications like refining crude oil or manufacturing fertilizers.

Unit Operations: Examination of key operations such as distillation, filtration, crystallization, and extraction that are used in chemical plants.
</p>

  </div>
);

const Prerequisites = () => (
  <div>
    <h3>Prerequisites</h3>
    <p>Basic Chemistry Knowledge: Students should have a foundational understanding of general chemistry principles, including chemical reactions, stoichiometry, the periodic table, and basic thermodynamics. High school-level chemistry or an introductory college chemistry course is recommended.

Mathematics Proficiency: A working knowledge of algebra and basic calculus is important for understanding reaction rates, material balances, and process calculations.

Physics Fundamentals: Familiarity with basic concepts in physics, such as energy, force, and fluid dynamics, will aid in comprehending certain industrial processes.

</p>
  </div>
);

const Labs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/labs');
  };

  return (
    <div>
      <h3>Labs Related to project:</h3>
      <p>Information about the labs included in the course.</p>
      <button className="crpg-interactive-learning" onClick={handleClick}>
        <span>Labs page</span>
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

const TestPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/testguidelinespage');
  };

  return (
    <div>
      <h3>Test Related to projects:</h3>
      <p>Details about the test pages and assessments.</p>
      <button className="crpg-interactive-learning" onClick={handleClick}>
        <span>Test Page</span>
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

const Material = () => (
  <div>
    <h3>Materials Related to Course:</h3>
    <p>Textbooks:

"Introduction to Industrial Chemistry" by C.A. Heaton: A comprehensive guide covering the essential principles of industrial chemistry, including raw materials, processes, and products.
"Industrial Organic Chemistry" by Klaus Weissermel and Hans-Jürgen Arpe: Focuses on organic chemicals in industrial production, particularly in the petrochemical industry.
Supplementary Reading:

"Green Chemistry: Theory and Practice" by Paul T. Anastas and John C. Warner: Explores sustainable and environmentally friendly practices in chemical production.
Research articles and case studies: Selected readings on current innovations in industrial chemistry, including new catalysts, process optimization, and green chemistry.</p>
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/labs');
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
              <div className="crpg-top">
            <div className="crpg-upper-div">
                <h2 className="crpg-ministry">Central Education Ministry</h2>
                <h1 className="crpg-course-title">Industrial Chemistry 101</h1>
                <p className="crpg-course-description">Industrial Chemistry 101 provides an introduction to the principles and practices of chemistry as applied in industrial processes. The course covers key topics such as chemical production.</p>

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
              <div className="crpg-image-box">
                <img src="./../src/assets/loginbg.png" alt="" />
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
              <button className="crpg-interactive-learning" onClick={handleClick}>
                <span>Start Course</span>
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
