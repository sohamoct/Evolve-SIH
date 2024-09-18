// src/components/LearningTime.js
import React from 'react';
import './LearningTime.css';

const LearningTime = ({ totalTime }) => {
    return (
        <div className="learning-time">
            <h3>Total Learning Hours</h3>
            <p>{totalTime}</p>
        </div>
    );
};

export default LearningTime;
