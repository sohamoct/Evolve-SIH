import React from "react";
import "./StudentProfiles.css";

const StudentProfile = ({ students }) => {
  const getZoneColor = (zone) => {
    switch (zone) {
      case "Green":
        return "green";
      case "Yellow":
        return "yellow";
      case "Red":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div className="student-profile-list">
      {students.map((student, index) => (
        <div key={index} className="student-profile-item">
          <img src={student.profilePic} alt={student.name} className="student-profile-pic" />
          <div className="student-profile-info">
            <p className="student-name">{student.name}</p>
            <div className={`zone-indicator ${student.zone.toLowerCase()}`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentProfile;
