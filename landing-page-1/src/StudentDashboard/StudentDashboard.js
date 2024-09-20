import React, { useState } from 'react';
import StudentNavbar from './StudentNavbar';
import StudentLearningTime from './StudentLearningTime';
import StudentStatus from './StudentStatus';
import StudentQuizzes from './StudentQuizzes';
import StudentBadges from './StudentBadges';
import StudentCourseList from './StudentCourseList';
import StudentLearningTrend from './StudentLearningTrend';
import './StudentDashboard.css';

const StudentDashboard = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const totalTime = '10 hrs 48 mins';
    const quizzes = [{ title: 'DSA Assessment' }, { title: 'ML Exam' }];
    const redCount = 5;
    const yellowCount = 11;
    const greenCount = 16;
    const recentBadge = {
        title: 'Top Performer',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJkl1XT1rg2qB26wcnkfNZhox8PAXJjKEmg&s',
    };
    const otherBadges = [
        { title: 'Quick Learner', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhWKMm0rdYtWbpGmMRW7tSi6ViSB8AN-qJw&s' },
    ];
    const trendData = [2, 3, 5, 4, 6, 7, 4];

    const courses = [
        {
            title: 'Deep Learning Essentials',
            description: 'Learn the fundamentals of deep learning.',
            thumbnail: 'https://imgs.search.brave.com/P9JYNldfEhOEkKeU-qCblxtcnr43v9_qrKi-XwFw82A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3JlZGx5LmNv/bS9pbWFnZXMvZjRm/MDhiNDUtYWEzOC00/MjQyLThiMDUtZGNk/YWM2ODExNTA0L0Rl/ZXBfTGVhcm5pbmdf/RXNzZW50aWFscy5w/bmc',
        },
        {
            title: 'Web Development Bootcamp',
            description: 'Learn full-stack web development from scratch.',
            thumbnail: 'https://imgs.search.brave.com/7bQOv5cCPmbPMYKRDplSN7R0i2F9Pa0Vt3ux-1a6mGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzMwLzYwLzM1/LzM2MF9GXzIzMDYw/MzU1MF9CVEtabTVV/RncyTHhLTEYzTEJm/VTVzbjIyTDJJWWEz/Wi5qcGc',
        },
        {
            title: 'Introduction to Cloud Computing',
            description: 'Learn the fundamentals of cloud services and architecture.',
            thumbnail: 'https://imgs.search.brave.com/J4JP0AuLrdzDtCYR0nqXyKGCMN8KbGeR0v5BomnX_d0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWMt/Y2RuLmF0bGFzc2lh/bi5jb20vZGFtL2pj/cjowZjc5MWNkNS1j/ODBjLTQ2NDEtYjEw/Yy0wOWM5YzliOWE4/YjcvQ2xvdWQlMjBj/b21wdXRpbmcucG5n/P2NkblZlcnNpb249/MjIzNQ',
        },
    ];

    return (
        <div className="student-dashboard">
            <StudentNavbar />
            <div className="student-dashboard-content">
                <StudentLearningTime totalTime={totalTime} />
                <StudentStatus redCount={redCount} yellowCount={yellowCount} greenCount={greenCount} />
                <StudentQuizzes quizzes={quizzes} />

                <div className="student-badges-learning-container">
                    <StudentBadges recentBadge={recentBadge} otherBadges={otherBadges} />
                    <StudentCourseList courses={courses} onCourseSelect={setSelectedCourse} />
                    <div className="student-learning-trend">
                        <StudentLearningTrend trendData={trendData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
