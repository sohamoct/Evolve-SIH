// src/components/Status.js
import React from 'react';
import './Status.css';

const Status = ({ redCount, yellowCount, greenCount }) => {
    return (
        <div className="status">
            <h3>Topics Status</h3>
            <div className="status-item">
                <div className="status-color red"></div> Red: {redCount}
            </div>
            <div className="status-item">
                <div className="status-color yellow"></div> Yellow: {yellowCount}
            </div>
            <div className="status-item">
                <div className="status-color green"></div> Green: {greenCount}
            </div>
        </div>
    );
};

export default Status;
