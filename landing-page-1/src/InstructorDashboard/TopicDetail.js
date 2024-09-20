import React, { useState } from "react";
import './TopicDetail.css';
import { courseData } from '../data'; // Assuming courseData is imported

const TopicDetail = ({ topic, onZoneClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedZones, setSelectedZones] = useState([]); // Updated to handle multiple selected zones

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleZoneClick = (zone) => {
    if (selectedZones.includes(zone)) {
      // If zone is already selected, remove it from the selected zones
      setSelectedZones(selectedZones.filter(selectedZone => selectedZone !== zone));
    } else {
      // If zone is not selected, add it to the selected zones
      setSelectedZones([...selectedZones, zone]);
    }
  };

  // Filter students by selected zones
  const filteredStudents = courseData[0].students.filter(student =>
    selectedZones.includes(student.zone.toLowerCase())
  );

  // Function to get the color of the zone indicator based on the student's zone
  const getZoneColor = (zone) => {
    switch (zone.toLowerCase()) {
      case 'red': return '#ff4d4d';
      case 'yellow': return '#ffd700';
      case 'green': return '#4caf50';
      default: return '#ccc';
    }
  };

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
            <button
              className={`zone-btn ${selectedZones.includes('red') ? 'selected' : ''}`}
              onClick={() => handleZoneClick('red')}
            >
              Red Zone
            </button>
            <button
              className={`zone-btn ${selectedZones.includes('yellow') ? 'selected' : ''}`}
              onClick={() => handleZoneClick('yellow')}
            >
              Yellow Zone
            </button>
            <button
              className={`zone-btn ${selectedZones.includes('green') ? 'selected' : ''}`}
              onClick={() => handleZoneClick('green')}
            >
              Green Zone
            </button>
          </div>
          
          {selectedZones.length > 0 && (
            <div className="student-list">
              <h4>Students in Selected Zone(s):</h4>
              {filteredStudents.length > 0 ? (
                <ul>
                  {filteredStudents.map((student, index) => (
                    <li key={index} className="student-item">
                      <img src={student.profilePic} alt={student.name} className="profile-pic" />
                      <span>{student.name}</span>
                      {/* Zone indicator circle */}
                      <span
                        className="zone-indicator"
                        style={{ backgroundColor: getZoneColor(student.zone) }}
                      ></span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No students in the selected zone(s).</p>
              )}

              {/* Display the "Create Learning Path" and "Upload Learning Path" buttons */}
              <div className="learning-path-buttons">
                <button className="path-btn">Create Learning Path</button>
                <button className="path-btn">Upload Learning Path</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopicDetail;
