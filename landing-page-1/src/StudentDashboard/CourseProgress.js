// src/components/CourseProgress.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import './CourseProgress.css';

const CourseProgress = ({ completionPercentage }) => {
    const data = {
        datasets: [
            {
                data: [completionPercentage, 100 - completionPercentage],
                backgroundColor: ['#FF6384', '#dddddd'],
            },
        ],
    };

    return (
        <div className="course-progress">
            <Pie data={data} />
            <h4>{completionPercentage}%</h4>
        </div>
    );
};

export default CourseProgress;
