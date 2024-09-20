import React from 'react';
import './RecommendCourses.css';

const RecommendCourses = () => {
  return (
    <div className="recommend-courses">
      <h2>Recommended Courses</h2>
      <div className="course-list">
        <div className="course-card">
          <div className="card-image">
            <img src="https://online.york.ac.uk/wp-content/uploads/2021/09/Illustration-of-a-brain-with-cogs-inside-and-pathways-outside-and-deep-learning-written-above.jpg" alt="Course" />
          </div>
          <div className="card-content">
            <h3>Machine Learning</h3>
            <p>Fundamentals of ML with hands-on experience</p>
            <div className="card-footer">
              <span>Ojas Mhatre</span>
              <span>3 Hours</span>
            </div>
          </div>
        </div>

        <div className="course-card">
          <div className="card-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfYwYSdOzb_g_JJKD17oGpFZhjGl8aFTHMw&s" alt="Course" />
          </div>
          <div className="card-content">
            <h3>Data Science</h3>
            <p>Introduction to Data Science and Analytics</p>
            <div className="card-footer">
              <span>Ojas Mhatre</span>
              <span>4 Hours</span>
            </div>
          </div>
        </div>

        {/* Add more recommended courses */}
      </div>
    </div>
  );
};

export default RecommendCourses;
