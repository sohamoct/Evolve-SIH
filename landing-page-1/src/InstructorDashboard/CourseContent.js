import React from "react";
import TopicDetail from "./TopicDetail";
import './CourseContent.css';

const CourseContent = ({ topics, isAdding, handleAddToggle, handleNewContentChange, newContent, addNewContent }) => {
  return (
    <div className="course-content">
      <h2>Course Content</h2>
      <div className="content-header">
        <span>{topics.length} topics</span>
      </div>
      {topics.map((topic) => (
        <TopicDetail key={topic.id} topic={topic} />
      ))}

      {/* Add New Content Section */}
      {isAdding ? (
        <div className="add-content">
          <input
            type="text"
            name="title"
            placeholder="New Topic Title"
            value={newContent.title}
            onChange={handleNewContentChange}
          />
          <button className="add-btn" onClick={addNewContent}>Add</button>
          <button className="cancel-btn" onClick={handleAddToggle}>Cancel</button>
        </div>
      ) : null}
    </div>
  );
};

export default CourseContent;
