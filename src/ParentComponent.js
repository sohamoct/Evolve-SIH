import React, { useState } from "react";
import TopicDetail from "./TopicDetail";

const ParentComponent = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  const handleZoneClick = (zone) => {
    console.log(`Zone clicked: ${zone}`);
    setSelectedZone(zone);
  };

  const topic = {
    name: "Sample Topic",
    subtopics: ["Subtopic 1", "Subtopic 2", "Subtopic 3"]
  };

  return (
    <div>
      <h2>Selected Zone: {selectedZone}</h2>
      <TopicDetail topic={topic} onZoneClick={handleZoneClick} />
    </div>
  );
};

export default ParentComponent;
