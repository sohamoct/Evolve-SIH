import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { courseData } from "../data";
import TopicDetail from "./TopicDetail";
import StudentList from "./StudentList";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseData.find((course) => course.id === parseInt(courseId));
  const [isEditing, setIsEditing] = useState(false);
  const [editedCourse, setEditedCourse] = useState(course);

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleInputChange = (e) => {
    setEditedCourse({ ...editedCourse, [e.target.name]: e.target.value });
  };

  return (
    <div className="course-detail">
      <div className="course-info">
        {isEditing ? (
          <>
            <input
              type="text"
              name="title"
              value={editedCourse.title}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              value={editedCourse.description}
              onChange={handleInputChange}
            />
            <button onClick={() => setIsEditing(false)}>Save</button>
          </>
        ) : (
          <>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <button onClick={handleEditToggle}>Edit</button>
          </>
        )}
      </div>

      <StudentList students={course.students} />

      <h2>Course Content</h2>
      {course.topics.map((topic) => (
        <TopicDetail key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default CourseDetail;
