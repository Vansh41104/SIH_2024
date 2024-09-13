import React, { useState } from "react";
import "./SecondPages.css"; // Include CSS for styling
import CardComponent from "../../components/CardComponent.jsx";

function SecondPages() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Top Courses");

  // Handle click to change the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Rendering courses based on active tab
  const renderCourses = () => {
    switch (activeTab) {
      case "Top Courses":
        return (
          <>
            <CardComponent
              Name="Chemistry"
              Rating="4.8 Reviews"
              TestName="Industrial Chemistry 101"
              Desc="Learn the industry based chemistry and the fundamentals of the chemical reaction which takes place."
            />
            <CardComponent
              Name="Physics"
              Rating="4.7 Reviews"
              TestName="Fundamentals of Physics"
              Desc="Understand the core principles of physics and how they apply in real-world scenarios."
            />
            <CardComponent
              Name="Development"
              Rating="4.9 Reviews"
              TestName="Full Stack Development"
              Desc="Learn to build scalable web applications using the latest tools and technologies."
            />
          </>
        );
      case "Chemistry":
        return (
          <>
            <CardComponent
              Name="Chemistry"
              Rating="4.8 Reviews"
              TestName="Organic Chemistry"
              Desc="Discover the fascinating world of organic molecules and their reactions."
            />
            <CardComponent
              Name="Chemistry"
              Rating="4.9 Reviews"
              TestName="Inorganic Chemistry"
              Desc="Dive deep into the principles of inorganic chemistry and their industrial applications."
            />
          </>
        );
      case "Physics":
        return (
          <>
            <CardComponent
              Name="Physics"
              Rating="4.7 Reviews"
              TestName="Quantum Mechanics"
              Desc="Explore the complex world of quantum physics and its applications."
            />
            <CardComponent
              Name="Physics"
              Rating="4.8 Reviews"
              TestName="Thermodynamics"
              Desc="Understand the laws of thermodynamics and how energy transfers occur."
            />
          </>
        );
      case "Development":
        return (
          <>
            <CardComponent
              Name="Development"
              Rating="4.9 Reviews"
              TestName="Frontend Development"
              Desc="Learn HTML, CSS, and JavaScript to build modern, responsive web interfaces."
            />
            <CardComponent
              Name="Development"
              Rating="4.8 Reviews"
              TestName="Backend Development"
              Desc="Master backend technologies such as Node.js, Python, and databases to create robust web apps."
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="Secondheader">
        <h1 style={{textAlign:"center"}}>Explore Our World's Best Courses</h1>
        <nav className="nav">
          <ul>
            <li
              className={activeTab === "Top Courses" ? "active" : ""}
              onClick={() => handleTabClick("Top Courses")}
            >
              Top Courses
            </li>
            <li
              className={activeTab === "Chemistry" ? "active" : ""}
              onClick={() => handleTabClick("Chemistry")}
            >
              Chemistry
            </li>
            <li
              className={activeTab === "Physics" ? "active" : ""}
              onClick={() => handleTabClick("Physics")}
            >
              Physics
            </li>
            <li
              className={activeTab === "Development" ? "active" : ""}
              onClick={() => handleTabClick("Development")}
            >
              Development
            </li>
          </ul>
        </nav>
      </div>

      <section className="courses-section">
        <div className="arrow left-arrow">←</div>
        {renderCourses()}
        <div className="arrow right-arrow">→</div>
      </section>
    </div>
  );
}

export default SecondPages;
