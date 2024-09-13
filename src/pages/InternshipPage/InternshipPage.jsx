import React from 'react';
import './InternshipPage.css';
import Navbar from "../../components/Navbar/Navbar";


const internships = [
  { id: 1, title: 'Internship 1' },
  { id: 2, title: 'Internship 2' },
  { id: 3, title: 'Internship 3' },
  { id: 4, title: 'Internship 4' },
  { id: 5, title: 'Internship 5' },
  { id: 6, title: 'Internship 6' },
];

const InternshipPage = () => {
  return (
    <div className="internship-page">
     
      <div className="filter-section">
        <div className="filter-tags">
          <span className="tag">Chemistry</span>
          <span className="tag">Physics</span>
          <span className="tag">Maths</span>
        </div>

        <div   className="filter-actions">
          <button className="filter-button" style={{color: 'black' }} >
            <span className="filter-icon" >⚙</span> Filters
          </button>
          <div className="search-bar"  style={{height:'20px' }} >
            <input type="text" placeholder="Search" />
            <button  className="search-button">🔍</button>
          </div>
        </div>
      </div>

      <div className="internship-list">
        {internships.map((internship) => (
          <div key={internship.id} className="internship-card">
            <h2>{internship.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
            <button className="apply-button">Apply Now →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipPage;