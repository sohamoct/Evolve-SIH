import React, { useState } from "react";
import "./StudentZone.css"; 

const StudentZone = ({ onZoneClick }) => {
  const [selectedZone, setSelectedZone] = useState(null);
  const zoneStudents = {
    red: ["John Doe", "Jane Smith"],
    yellow: ["Student X", "Student Y"],
    green: ["Student A", "Student B"]
  };

  const handleZoneChange = (zone) => {
    setSelectedZone(zone);
    onZoneClick(zone); // Call the passed function when a zone is selected
  };

  return (
    <div className="zone-selection">
      <label>
        <input
          type="radio"
          name="zone"
          value="red"
          onChange={() => handleZoneChange("red")}
        />
        Red Zone
      </label>
      <label>
        <input
          type="radio"
          name="zone"
          value="yellow"
          onChange={() => handleZoneChange("yellow")}
        />
        Yellow Zone
      </label>
      <label>
        <input
          type="radio"
          name="zone"
          value="green"
          onChange={() => handleZoneChange("green")}
        />
        Green Zone
      </label>

      {selectedZone && (
        <div className="zone-students">
          <h3>{selectedZone.charAt(0).toUpperCase() + selectedZone.slice(1)} Zone Students</h3>
          <ul>
            {zoneStudents[selectedZone].map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentZone;
