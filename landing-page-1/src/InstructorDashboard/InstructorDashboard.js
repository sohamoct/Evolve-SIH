import React from 'react';
import LearningTrendChart from './LearningTrendChart';
import LearnerDistributionChart from './LearnerDistributionChart';
import StudentCardList from './StudentCardList';
import './InstructorDashboard.css';

const InstructorDashboard = () => {
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
            <div className="total-learners-bar" style={{ width: `60%` }} /> {/* Replace with your calculation */}
          </div>
          <p>5102</p>
        </div>
      </div>

      <div className="dashboard-row">
        {/* Fit StudentCardList below charts */}
        <div className="student-card-section">
            <h3>Enrolled Students</h3> {/* Moved title inside the section */}
            <StudentCardList />
        </div>

      </div>
    </div>
  );
};

export default InstructorDashboard;
