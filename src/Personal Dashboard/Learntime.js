// src/components/LearningTime.js
import React from 'react';
import './Learntime.css';

const LearningTime = ({ totalTime }) => {
    return (
        <div className="learning-time">
            <h3>Total Learning Hours</h3>
            <p>8H : 16M</p>
            <br></br>
            <h3>Total Time Spent this week</h3>
            <p>2H : 11M</p>
        </div>
    );
};

export default LearningTime;
