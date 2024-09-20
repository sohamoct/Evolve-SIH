// src/components/LearningTrend.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import './LearningTrend.css';

const LearningTrend = ({ trendData }) => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Learning Hours',
                data: trendData,
                fill: false,
                borderColor: '#4bc0c0',
                tension: 0.1, // Smooth line
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#4bc0c0',
                pointHoverBackgroundColor: '#4bc0c0',
                pointHoverBorderColor: '#ffffff',
                pointRadius: 5,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#e1e1e1',
                },
                ticks: {
                    color: '#333',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#333',
                },
            },
        },
    };

    return (
        <div className="learning-trend">
            <h3>Learning Trend</h3>
            <div className="chart-container">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default LearningTrend;
