import React from 'react';
import PersonalNavbar from './PersonalNavbar';
import RecentCourse from './RecentCourse';
import YourCourses from './YourCourses';
import RecommendCourses from './RecommendCourses';
import QuizzesGiven from './QuizzesGiven';
import DiscussionSection from './DiscussionSection';


import './PersonalDashboard.css'; // Custom styles for the dashboard

const PersonalDashboard = () => {
  return (
    <div className="personal-dashboard">
      {/* Include Navbar at the top */}
      <PersonalNavbar />

      {/* Content below Navbar */}
      <RecentCourse />
      <YourCourses />
      <RecommendCourses />
      <QuizzesGiven />
      <DiscussionSection />
    </div>
  );
};

export default PersonalDashboard;