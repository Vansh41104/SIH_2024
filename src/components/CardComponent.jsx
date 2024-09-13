import React from 'react'
import './CardComponent.css'
import { useNavigate } from 'react-router-dom';

const CardComponent = ({Name,Rating,TestName,Desc}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/course');
  };

  return (
    <div className="course-card">
          <img
            src="src/assets/testguidelineimg.png" // Replace this with the actual image URL
            alt="Chemistry course"
            className="course-image"
          />
          <div className="second-course-info">
            <span className="category">{Name}</span>
            <span className="rating">★ ({Rating})</span>
            <h2>{TestName}</h2>
            <p>
              {Desc}
            </p>
            <button className="enroll-btn" onClick={handleClick}>Enroll Now →</button>
          </div>
        </div>
  )
}

export default CardComponent
