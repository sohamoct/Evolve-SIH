import React, { useState } from "react";
import StudentZone from "./StudentZone";

const TopicDetail = ({ topic }) => {
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
          <p>Red Zone: {topic.red}</p>
          <p>Yellow Zone: {topic.yellow}</p>
          <p>Green Zone: {topic.green}</p>
          <button className="upload-path">Upload Learning Path</button>
          <StudentZone />
        </div>
      )}
    </div>
  );
};

export default TopicDetail;
