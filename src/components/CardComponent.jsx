import React from 'react'
import './CardComponent.css'

const CardComponent = ({Name,Rating,TestName,Desc}) => {
  return (
    <div className="course-card">
          <img
            src="https://via.placeholder.com/300x200" // Replace this with the actual image URL
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
            <button className="enroll-btn">Enroll Now →</button>
          </div>
        </div>
  )
}

export default CardComponent
