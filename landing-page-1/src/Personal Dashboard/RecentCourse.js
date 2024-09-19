import React from 'react';
import './RecentCourse.css';

const RecentCourse = () => {
  return (
    <div className="recent-course">
      <h2>Most Recently Watched Course</h2>
      <div className="course-details">
        <h3>Deep Learning</h3>
        <p>Introduction to Deep Learning with 11 lessons</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: '80%' }}></div>
        </div>
        <p>80% Completed</p>
      </div>
    </div>
  );
};

export default RecentCourse;
