import React from 'react';
import './CourseList.css';
import { FaChevronRight } from 'react-icons/fa'; 

const CourseList = ({ courses, onCourseSelect }) => {
    return (
        <div className="your-all-courses">
            <div className="course-list">
                <h3 className="section-title">Courses Taken By Student</h3>
                {courses.map((course, index) => (
                    <div key={index} className="course-card" onClick={() => onCourseSelect(course)}>
                        <img src={course.thumbnail} alt={course.title} className="course-image" />
                        <div className="course-details">
                            <div className="course-name">{course.title}</div>
                            <p className="course-description">{course.description}</p>
                        </div>
                        <FaChevronRight className="chevron-icon" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
