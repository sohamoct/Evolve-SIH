import React from 'react';
import './CourseList.css';
import { FaChevronRight } from 'react-icons/fa'; // Importing the chevron icon
import Course1 from "../images/Course1.png";


const CourseList = ({ courses, onCourseSelect }) => {
    return (
        <div className="course-list">
            <h3>Courses</h3>
            {courses.map((course, index) => (
                <div key={index} className="course-item" onClick={() => onCourseSelect(course)}>
                    <img src= {Course1} alt={course.name} className="course-image" />
                    <div className="course-details">
                        <p className="course-name">{course.name}</p>
                        <FaChevronRight className="chevron-icon" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseList;
