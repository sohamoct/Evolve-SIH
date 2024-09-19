import React from 'react';
import './RecommendCourses.css';

const RecommendCourses = () => {
  return (
    <div className="recommend-courses">
      <h2>Recommended Courses</h2>
      <div className="course-list">
        <div className="course-card">
          <h3>Machine Learning</h3>
        </div>
        <div className="course-card">
          <h3>Data Science</h3>
        </div>
        {/* Add more recommended courses */}
      </div>
    </div>
  );
};

export default RecommendCourses;
