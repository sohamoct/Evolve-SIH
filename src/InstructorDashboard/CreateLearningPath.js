import React, { useState } from 'react';
import './CreateLearningPath.css'; // Add styles as needed

const CreateLearningPath = () => {
  const [learningPaths, setLearningPaths] = useState([{ id: 1, resources: [] }]);

  // Handle resource upload for specific learning path
  const handleResourceUpload = (e, pathId) => {
    const newResource = e.target.files[0];
    setLearningPaths((prevPaths) =>
      prevPaths.map((path) =>
        path.id === pathId ? { ...path, resources: [...path.resources, newResource] } : path
      )
    );
  };

  // Add new learning path
  const addLearningPath = () => {
    setLearningPaths((prevPaths) => [...prevPaths, { id: prevPaths.length + 1, resources: [] }]);
  };

  return (
    <div className="create-learning-path">
      <h2>Create Learning Path</h2>

      {/* Display all learning paths */}
      {learningPaths.map((path) => (
        <div key={path.id} className="learning-path">
          <h3>Learning Path {path.id}</h3>

          {/* Resource upload input */}
          <input
            type="file"
            onChange={(e) => handleResourceUpload(e, path.id)}
            accept=".pdf,.doc,.docx,.png,.jpg,video/*"
          />

          {/* Display uploaded resources */}
          <ul>
            {path.resources.map((resource, index) => (
              <li key={index}>{resource.name}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Add new learning path button */}
      <button onClick={addLearningPath} className="add-learning-path-btn">
        + Add New Learning Path
      </button>
    </div>
  );
};

export default CreateLearningPath;
