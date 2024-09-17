// src/components/LearningTrend.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import './LearningTrend.css';

const LearningTrend = ({ trendData }) => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Hours',
                data: trendData,
                fill: false,
                borderColor: '#4bc0c0',
            },
        ],
    };

    return (
        <div className="learning-trend">
            <h3>Learning Trend</h3>
            <Line data={data} />
        </div>
    );
};

export default LearningTrend;
