import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import "./LearningTrendChart.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LearningTrendChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Learning Hours',
        data: [4, 5, 4, 6, 7, 8, 6, 5, 4],
        borderColor: 'rgba(75, 192, 192, 1)', // Adjust to fit the blue theme
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light blue for fill
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Blue for points
        pointBorderColor: '#fff', // White border for points
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#1e3a8a', // Dark blue for legend text
        },
      },
      tooltip: {
        backgroundColor: '#1e3a8a', // Dark blue for tooltip background
        titleColor: '#fff', // White for tooltip title
        bodyColor: '#fff', // White for tooltip body
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#1e3a8a', // Dark blue for x-axis labels
        },
        grid: {
          color: '#d1d9e6', // Light blue for grid lines
        },
      },
      y: {
        ticks: {
          color: '#1e3a8a', // Dark blue for y-axis labels
        },
        grid: {
          color: '#d1d9e6', // Light blue for grid lines
        },
      },
    },
  };

  return (
    <div className="learning-trend-container">
      <div className="learning-trend">
        <h3>Learning Trend (Monthly)</h3>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LearningTrendChart;
