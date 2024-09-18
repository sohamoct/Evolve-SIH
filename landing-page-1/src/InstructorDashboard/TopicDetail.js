import React, { useState } from "react";
import './TopicDetail.css';

const TopicDetail = ({ topic, onZoneClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="topic-detail">
      <div onClick={toggleExpand} className="topic-row">
        <h3>{topic.name}</h3>
        <span className="arrow">{isExpanded ? "↓" : "→"}</span>
      </div>
      {isExpanded && (
        <div className="expanded-topic">
          <ul>
            {topic.subtopics.map((subtopic, index) => (
              <li key={index}>{subtopic}</li>
            ))}
          </ul>
          <div className="zone-buttons">
            <button className="zone-btn" onClick={() => onZoneClick('red')}>Red Zone</button>
            <button className="zone-btn" onClick={() => onZoneClick('yellow')}>Yellow Zone</button>
            <button className="zone-btn" onClick={() => onZoneClick('green')}>Green Zone</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicDetail;
