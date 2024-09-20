import React from 'react';
import PersonalNavbar from './PersonalNavbar';
import RecentCourse from './RecentCourse';
import YourCourses from './YourCourses';
import RecommendCourses from './RecommendCourses';
import QuizzesGiven from './QuizzesGiven';
import DiscussionSection from './DiscussionSection';
import LearningTime from './Learntime'; // Import as a component
import './PersonalDashboard.css'; // Custom styles for the dashboard

const PersonalDashboard = () => {
  return (
    <div className="personal-dashboard">
      {/* Include Navbar at the top */}
      <PersonalNavbar />

      {/* Content below Navbar */}
      <RecentCourse />
      <div className='sec-row'>
      <YourCourses />
      <LearningTime /> {/* Use as a component */}
      </div>
      
      <RecommendCourses />
      <QuizzesGiven />
      <DiscussionSection />
    </div>
  );
};

export default PersonalDashboard;
