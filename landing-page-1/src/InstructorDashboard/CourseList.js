import React from "react";
import { useNavigate } from "react-router-dom";
import { courseData } from "../data";
import "./CourseList.css";

const CourseList = ({ onCourseClick }) => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="your-all-courses">
      <div className="course-list">
        <div className="section-title">Your Courses</div>
        {courseData.map((course) => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => handleCourseClick(course.id)}
          >
            <img src={course.thumbnail} alt={course.title} />
            <div className="course-card-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
            <span className="arrow">&gt;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
