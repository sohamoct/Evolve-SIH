import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import "./LearnerDistributionChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const LearnerDistributionChart = () => {
  const data = {
    labels: ['Strong', 'Average', 'Weak'],
    datasets: [
      {
        data: [60, 15, 25],
        backgroundColor: ['#2dc937', '#FFFF00', '#FF0000'],
        hoverBackgroundColor: ['#2dc937', '#FFFF00', '#FF0000'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        // Custom tooltip options can go here
      },
      legend: {
        position: 'top',
      },
      // Custom animation options
      animation: {
        animateRotate: true,
        animateScale: true,
        // Additional animation settings
        duration: 1500, // Duration of the animation in milliseconds
        easing: 'easeOutBounce', // Easing function for animation
      },
    },
    // Custom animation for chart elements
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: '#fff', // Border color around each segment
        // Adding a subtle animation for the segments
        animation: {
          animateScale: true,
          animateRotate: true,
          duration: 1000,
        },
      },
    },
  };

  return (
    <div className="learner-distribution">
      <h3>Learner Distribution</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default LearnerDistributionChart;
