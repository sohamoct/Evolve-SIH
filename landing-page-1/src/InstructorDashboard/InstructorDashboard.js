import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import LearningTrendChart from './LearningTrendChart';
import LearnerDistributionChart from './LearnerDistributionChart';
import StudentCardList from './StudentCardList';
import CourseList from './CourseList'; 
import CourseDetail from './CourseDetail'; // Adjust the path as needed

import './InstructorDashboard.css';

const InstructorDashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`); // Redirect to CourseDetail page
  };

  const handleBackToList = () => {
    navigate('/'); // Navigate back to the dashboard or course list page
  };

  return (
    <div className="instructor-dashboard">
      <div className="dashboard-row">
        <div className="learning-trend-chart">
          <LearningTrendChart />
        </div>
        <div className="learner-distribution-chart">
          <LearnerDistributionChart />
        </div>
        <div className="total-learners">
          <h3>Total Learners</h3>
          <div className="total-learners-bar-container">
            <div className="total-learners-bar" style={{ width: `60%` }} />
          </div>
          <p>5102</p>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="student-card-section">
          <h3>Enrolled Students</h3>
          <StudentCardList />
        </div>

        <div className="course-section">
          {selectedCourse ? (
            <>
              <button onClick={handleBackToList} className="back-button">Back to Course List</button>
              <CourseDetail courseId={selectedCourse} />
            </>
          ) : (
            <CourseList onCourseClick={handleCourseClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
