import React, { useState } from 'react';
import './LabsPage.css';
import { useNavigate } from 'react-router-dom';

const coursePages = [
  { image: "src/assets/lab1.png", title: "Industrial Complex" },
  { image: "src/assets/lab2.png", title: "Chemical Engineering" },
  { image: "src/assets/download 1.png", title: "Mechanical Systems" },
  { image: "src/assets/image 1.png", title: "Electrical Engineering" },
  { image: "src/assets/image 3.png", title: "Process Control" },
  { image: "src/assets/image.jpg", title: "Safety Protocols"},
];

const LabsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/dashboard");
  };

  const goToNextPage = () => {
    if (currentPage === coursePages.length - 1) {
      // If it's the last page, redirect to TestGuidelines
      navigate("/TestGuidelinesPage");
    } else {
      // Otherwise, go to the next page
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + coursePages.length) % coursePages.length);
  };

  return (
    <div className="course-detail-page">
      <header>
        <button className="back-button" onClick={handleBackClick}>←</button>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${((currentPage + 1) / coursePages.length) * 100}%` }}></div>
        </div>
      </header>
      <main>
        <button className="menu-button">☰</button>
        <div className="content">
          <div className="image-container">
            <img src={coursePages[currentPage].image} alt={coursePages[currentPage].title} />
          </div>
          <div className="course-info">
            <h2>This Course Includes :</h2>
            <ul>
              <li>10.4 hours on-demand videos</li>
              <li>15 Study labs</li>
              <li>Industrial resources access</li>
              <li>Certificate of completion</li>
              <li>Badges and many more !</li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <button className="next-button" onClick={goToNextPage}>
          {currentPage === coursePages.length - 1 ? "Start Test" : "Next"} <span>▶</span>
        </button>
      </footer>
    </div>
  );
}

export default LabsPage;