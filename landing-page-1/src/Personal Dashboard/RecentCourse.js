import React from 'react';
import './RecentCourse.css';
import deepLearningImage from '../images/Rectangle 6623.png'; // Add the correct path if necessary

const RecentCourse = () => {
  return (
    <div className="recent-course">
      <div className="course-image-container">
        <img src={deepLearningImage} alt="Deep Learning Course" className="course-image" />
        <div className="course-overlay">
          <div className="course-overlay-content">
            <div className="welcome-text">Welcome, Manish S.</div>
            {/* <h1>Introduction to Deep Learning</h1> */}
            <div className="course-details-bottom">
            <p className="course-category">Introduction to Deep Learning</p>
            <p>6 Lessons • 3 Hours</p>
            </div>
            <div className='start-button'>
            <button className="start-course-button">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCourse;
