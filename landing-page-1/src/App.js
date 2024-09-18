import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Navbar from './HomePage/Navbar';
import InstructorNavbar from './InstructorDashboard/InstructorNavbar'; // Import InstructorNavbar
import HeroSection from './HomePage/HeroSection';
import FeaturesSection from './HomePage/FeaturesSection';
import HighlightSection from './HomePage/HighlightSection';
import Footer from './HomePage/Footer';
import Carousel from './HomePage/Carousel';
import LoginPage from './LoginPage/LoginPage'; 
import SignUp from './SignUp/SignUp'; 
import InstructorDashboard from './InstructorDashboard/InstructorDashboard'; // Import the InstructorDashboard component
import ProfilePage from './InstructorDashboard/ProfilePage';
import UploadResources from './InstructorDashboard/UploadResources'; // Import UploadResources component
import CreateLearningPath from './InstructorDashboard/CreateLearningPath'; // Import CreateLearningPath component

// Import the new CourseList and CourseDetail components
import CourseList from './InstructorDashboard/CourseList';
import CourseDetail from './InstructorDashboard/CourseDetail';

// Component to conditionally render Navbar
const Layout = ({ children }) => {
  const location = useLocation();
  const isInstructorRoute = location.pathname.includes('/instructor-dashboard') || location.pathname.includes('/course/'); // Instructor route check

  return (
    <>
      {isInstructorRoute ? <InstructorNavbar /> : <Navbar />} {/* Conditional Navbar */}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <div className="container mt-5">
              <section id="home-section">
                <HeroSection />
              </section>
              <section id="features-section">
                <FeaturesSection />
              </section>
              <section id="carousel-section">
                <Carousel />
              </section>
              <section id="footer">
                <Footer />
              </section>
            </div>
          }
        />

        {/* Login page route */}
        <Route path="/login" element={<LoginPage />} /> 
        
        {/* Sign up page route */}
        <Route path="/signup" element={<SignUp />} /> 
        
        {/* Instructor Routes */}
        <Route
          path="/instructor-dashboard"
          element={
            <Layout>
              <InstructorDashboard />
            </Layout>
          }
        />

        <Route
          path="/instructor-profile"
          element={
            <Layout>
              <ProfilePage />
            </Layout>
          }
        />

        {/* Upload Resources Page */}
        <Route
          path="/upload-resources"
          element={
            <Layout>
              <UploadResources />
            </Layout>
          }
        />

        {/* Create Learning Path Page */}
        <Route
          path="/create-learning-path"
          element={
            <Layout>
              <CreateLearningPath />
            </Layout>
          }
        />

        {/* Course List and Course Detail Routes */}
        <Route
          path="/instructor-courses"
          element={
            <Layout>
              <CourseList />
            </Layout>
          }
        />

        {/* Dynamic route for course detail */}
        <Route
          path="/course/:courseId"
          element={
            <Layout>
              <CourseDetail />
            </Layout>
          }
        />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
