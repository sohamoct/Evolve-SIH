import React, { useState } from "react";
import "./StudentZone.css"; // Import the CSS file

const StudentZone = () => {
  const [selectedZone, setSelectedZone] = useState(null);
  const zoneStudents = {
    red: ["John Doe", "Jane Smith"],
    yellow: ["Student X", "Student Y"],
    green: ["Student A", "Student B"]
  };

  return (
    <div className="zone-selection">
      <input
        type="radio"
        name="zone"
        value="red"
        onChange={() => setSelectedZone("red")}
      />
      Red Zone
      <input
        type="radio"
        name="zone"
        value="yellow"
        onChange={() => setSelectedZone("yellow")}
      />
      Yellow Zone
      <input
        type="radio"
        name="zone"
        value="green"
        onChange={() => setSelectedZone("green")}
      />
      Green Zone
      {selectedZone && (
        <div className="zone-students">
          <h3>{selectedZone} Zone Students</h3>
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
