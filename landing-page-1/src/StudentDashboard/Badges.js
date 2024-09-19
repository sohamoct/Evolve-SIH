// src/components/Badges.js
import React from 'react';
import './Badges.css';

const Badges = ({ recentBadge, otherBadges }) => {
    return (
        <div className="badges-container">
            <h3 className="badges-title">Badges</h3>
            <div className="badge recent-badge">
                <img src={recentBadge.imageUrl} alt={recentBadge.title} />
                <div className="badge-info">
                    <h4>{recentBadge.title}</h4>
                    <p>Completed 10 assignments</p>
                    <p>Issued on 04/09/2024</p>
                </div>
            </div>
            <h4 className="previous-badges-title">Previous Badges</h4>
            <div className="other-badges">
                {otherBadges.map((badge, index) => (
                    <div key={index} className="badge other-badge">
                        <img src={badge.imageUrl} alt={badge.title} />
                        <p>{badge.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Badges;
