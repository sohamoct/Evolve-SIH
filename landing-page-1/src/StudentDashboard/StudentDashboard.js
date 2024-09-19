// src/components/StudentDashboard.js
import React, { useState } from 'react';
import StudentNavbar from './StudentNavbar';
import LearningTime from './LearningTime';
import Status from './Status';
import Quizzes from './Quizzes';
import CourseProgress from './CourseProgress';
import Badges from './Badges';
import CourseList from './CourseList';
import LearningTrend from './LearningTrend';
import './StudentDashboard.css';

const StudentDashboard = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const totalTime = '10 hrs 48 mins';
    const quizzes = [{ title: 'DSA Assessment' }, { title: 'ML Exam' }];
    const redCount = 74;
    const yellowCount = 52;
    const greenCount = 36;
    const completionPercentage = 72;
    const recentBadge = {
        title: 'Top Performer',
        imageUrl: 'https://via.placeholder.com/100',
    };
    const otherBadges = [
        { title: 'Quick Learner', imageUrl: 'https://via.placeholder.com/80' },
    ];
    const trendData = [2, 3, 5, 4, 6, 7, 4];
    const courses = [{ name: 'Course 1' }, { name: 'Course 2' }];

    return (
        <div className="student-dashboard">
            <StudentNavbar />
            <div className="dashboard-content">
                <LearningTime totalTime={totalTime} />
                <Status redCount={redCount} yellowCount={yellowCount} greenCount={greenCount} />
                <Quizzes quizzes={quizzes} />
                <CourseProgress completionPercentage={completionPercentage} />
                <CourseList courses={courses} onCourseSelect={setSelectedCourse} />
                <Badges recentBadge={recentBadge} otherBadges={otherBadges} />
                <LearningTrend trendData={trendData} />
            </div>
        </div>
    );
};

export default StudentDashboard;
