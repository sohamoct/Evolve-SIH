import React from 'react';
import LearningTrendChart from './LearningTrendChart';
import LearnerDistributionChart from './LearnerDistributionChart';
import './InstructorDashboard.css'; // Add necessary styles

const InstructorDashboard = () => {
  const totalLearners = 5102;
  
  // You can calculate the percentage for the bar width based on the max value you want to represent
  // For this example, we assume a maximum value of 10000 for full-width (100%)
  const maxValue = 10000; 
  const barWidth = (totalLearners / maxValue) * 100; // Percentage width

  return (
    <div className="instructor-dashboard">
      {/* Learning Trend Chart */}
      <div className="dashboard-row">
        <div className="learning-trend-chart">
          <LearningTrendChart />
        </div>
        
        {/* Learner Distribution Chart */}
        <div className="learner-distribution-chart">
          <LearnerDistributionChart />
        </div>
        
        {/* Total Learners */}
        <div className="total-learners">
          <h3>Total Learners</h3>
          <div className="total-learners-bar-container">
            <div 
              className="total-learners-bar" 
              style={{ width: `${barWidth}%` }}
            />
          </div>
          <p>{totalLearners}</p>
        </div>
      </div>
      
      {/* Leaderboard and Courses */}
      
    </div>
  );
};

export default InstructorDashboard;
