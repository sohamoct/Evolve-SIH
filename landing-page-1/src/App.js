import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Navbar from './HomePage/Navbar';
import InstructorNavbar from './InstructorDashboard/InstructorNavbar'; // Import InstructorNavbar
import HeroSection from './HomePage/HeroSection';
import FeaturesSection from './HomePage/FeaturesSection';
import Footer from './HomePage/Footer';
import Carousel from './HomePage/Carousel';
import LoginPage from './LoginPage/LoginPage';
import SignUp from './SignUp/SignUp';
import InstructorDashboard from './InstructorDashboard/InstructorDashboard'; // Import InstructorDashboard component
import ProfilePage from './InstructorDashboard/ProfilePage';
import UploadResources from './InstructorDashboard/UploadResources'; // Import UploadResources component
import CreateLearningPath from './InstructorDashboard/CreateLearningPath'; // Import CreateLearningPath component
import CourseList from './InstructorDashboard/CourseList'; // Import CourseList component
import CourseDetail from './InstructorDashboard/CourseDetail'; // Import CourseDetail component
import StudentDashboard from './StudentDashboard/StudentDashboard'; // Import the StudentDashboard component
import StudentNavbar from './StudentDashboard/StudentNavbar'; // Import the StudentNavbar component

// Component to conditionally render Navbar
const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes where no navbar should be displayed
  const noNavbarRoutes = [
    '/instructor-dashboard/upload-resources',
    '/instructor-dashboard/create-learning-path',
    '/student-dashboard'
  ];

  // Check if the navbar should be hidden
  const hideNavbar = noNavbarRoutes.includes(location.pathname);

  // Check if current route is for the instructor or a course page
  const isInstructorRoute = location.pathname.includes('/instructor-dashboard') || location.pathname.includes('/course/');

  // Check if the current route is for the student
  const isStudentRoute = location.pathname.includes('/student-dashboard');

  return (
    <>
      {!hideNavbar && (
        isInstructorRoute ? (
          <InstructorNavbar />
        ) : isStudentRoute ? (
          <StudentNavbar />
        ) : (
          <Navbar />
        )
      )}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
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

          {/* Instructor Dashboard Routes */}
          <Route
            path="/instructor-dashboard"
            element={<InstructorDashboard />}
          />

          <Route
            path="/instructor-profile"
            element={<ProfilePage />}
          />

          {/* Upload Resources Page */}
          <Route
            path="/instructor-dashboard/upload-resources"
            element={<UploadResources />}
          />

          {/* Create Learning Path Page */}
          <Route
            path="/instructor-dashboard/create-learning-path"
            element={<CreateLearningPath />}
          />

          {/* Course List and Course Detail Routes */}
          <Route
            path="/instructor-courses"
            element={<CourseList />}
          />

          <Route
            path="/course/:courseId"
            element={<CourseDetail />}
          />

          {/* Student Dashboard Route */}
          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
