import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { courseData } from "../data";
import StudentProfiles from "./StudentProfiles";
import CourseContent from "./CourseContent";
import './CourseDetail.css';

const CourseDetail = () => {
  const { courseId } = useParams(); // Get courseId from the URL
  const course = courseData.find((course) => course.id === parseInt(courseId));
  const [isEditing, setIsEditing] = useState(false);
  const [editedCourse, setEditedCourse] = useState(course);
  const [isAdding, setIsAdding] = useState(false);
  const [newContent, setNewContent] = useState({ title: "", description: "" });

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleInputChange = (e) => {
    setEditedCourse({ ...editedCourse, [e.target.name]: e.target.value });
  };

  const handleAddToggle = () => setIsAdding(!isAdding);
  const handleNewContentChange = (e) => {
    setNewContent({ ...newContent, [e.target.name]: e.target.value });
  };

  const addNewContent = () => {
    const updatedTopics = [...editedCourse.topics, { id: Date.now(), name: newContent.title, subtopics: [] }];
    setEditedCourse({ ...editedCourse, topics: updatedTopics });
    setIsAdding(false);
  };

  const handleFileUpload = () => {
    console.log("Upload Learning Path");
  };

  const handleCreateLearningPath = () => {
    console.log("Create Learning Path");
  };

  if (!course) {
    return <div>Course not found</div>; // Handle invalid course ID
  }

  return (
    <div className="course-detail-container">
      <div className="course-detail-content">
        {/* Course Information */}
        <div className="course-info">
          <img src={course.thumbnail} alt={course.title} className="course-image" />
          <div className="course-info-content">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={editedCourse.title}
                  onChange={handleInputChange}
                  placeholder="Course Title"
                />
                <textarea
                  name="description"
                  value={editedCourse.description}
                  onChange={handleInputChange}
                  placeholder="Course Description"
                />
                <button className="save-btn" onClick={() => setIsEditing(false)}>Save</button>
              </>
            ) : (
              <>
                <h1>{course.title}</h1>
                <p>{course.description}</p>
                <button className="edit-btn" onClick={handleEditToggle}>Edit</button>
              </>
            )}
          </div>
        </div>

        {/* Course Content */}
        <CourseContent
          topics={editedCourse.topics}
          isAdding={isAdding}
          handleAddToggle={handleAddToggle}
          handleNewContentChange={handleNewContentChange}
          newContent={newContent}
          addNewContent={addNewContent}
        />
         {/* Course Action Buttons */}
         <div className="course-action-buttons">
        <button className="add-more-btn" onClick={handleAddToggle}>
          Add More
        </button>
        <button className="edit-course-btn" onClick={handleEditToggle}>
          Edit Course
        </button>
      </div>

        {/* Enrolled Students */}
        <div className="enrolled-students">
          <h2>Enrolled Students</h2>
          <StudentProfiles students={course.students} />
          <button className="view-all-btn">View All</button>
        </div>
      </div>
       

      {/* Learning Path Actions */}
      <div className="learning-path-actions">
        <button onClick={handleFileUpload}>Upload Learning Path</button>
        <button onClick={handleCreateLearningPath}>Create Learning Path</button>
      </div>
    </div>
  );
};

export default CourseDetail;
