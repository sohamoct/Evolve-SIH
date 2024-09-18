// src/components/CourseList.js
import React from 'react';
import './CourseList.css';

const CourseList = ({ courses, onCourseSelect }) => {
    return (
        <div className="course-list">
            <h3>Courses</h3>
            {courses.map((course, index) => (
                <div key={index} className="course-item" onClick={() => onCourseSelect(course)}>
                    <p>{course.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CourseList;
