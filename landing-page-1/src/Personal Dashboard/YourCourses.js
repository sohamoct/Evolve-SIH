import React from 'react';
import './YourCourses.css';

const YourCourses = () => {
  return (
    <div className="your-courses">
      <h2>Your Courses</h2>
      <div className="course-slider">
        {/* Course Cards */}
        <div className="course-card">
          <h3>Deep Learning</h3>
          <p>80% Completed</p>
        </div>
        <div className="course-card">
          <h3>UI/UX Design</h3>
          <p>50% Completed</p>
        </div>
        {/* Add sliding functionality here */}
      </div>
    </div>
  );
};

export default YourCourses;
