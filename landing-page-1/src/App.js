// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// import Navbar from './HomePage/Navbar';
// import InstructorNavbar from './InstructorDashboard/InstructorNavbar'; // Import InstructorNavbar
// import HeroSection from './HomePage/HeroSection';
// import FeaturesSection from './HomePage/FeaturesSection';
// import HighlightSection from './HomePage/HighlightSection';
// import Footer from './HomePage/Footer';
// import Carousel from './HomePage/Carousel';
// import LoginPage from './LoginPage/LoginPage'; 
// import SignUp from './SignUp/SignUp'; 
// import InstructorDashboard from './InstructorDashboard/InstructorDashboard'; // Import the InstructorDashboard component
// import ProfilePage from './InstructorDashboard/ProfilePage';
// import UploadResources from './InstructorDashboard/UploadResources'; // Import UploadResources component
// import CreateLearningPath from './InstructorDashboard/CreateLearningPath'; // Import CreateLearningPath component

// // Component to conditionally render Navbar
// const Layout = ({ children }) => {
//   const location = useLocation();
  
//   // Check if we are on a route that should hide the navbar
//   const noNavbarRoutes = ['/instructor-dashboard/upload-resources', '/instructor-dashboard/create-learning-path'];
//   const hideNavbar = noNavbarRoutes.includes(location.pathname);

//   const isInstructorRoute = location.pathname.includes('/instructor-dashboard');

//   return (
//     <>
//       {/* Only render Navbar if the current route is not in the noNavbarRoutes */}
//       {!hideNavbar && (isInstructorRoute ? <InstructorNavbar /> : <Navbar />)} 
//       {children}
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {/* Home page route */}
//           <Route
//             path="/"
//             element={
//               <div className="container mt-5">
//                 <section id="home-section">
//                   <HeroSection />
//                 </section>
//                 <section id="features-section">
//                   <FeaturesSection />
//                 </section>
//                 <section id="carousel-section">
//                   <Carousel />
//                 </section>
//                 <section id="footer">
//                   <Footer />
//                 </section>
//               </div>
//             }
//           />

//           {/* Login page route */}
//           <Route path="/login" element={<LoginPage />} /> 
          
//           {/* Sign up page route */}
//           <Route path="/signup" element={<SignUp />} /> 
          
//           {/* Instructor Routes */}
//           <Route
//             path="/instructor-dashboard"
//             element={<InstructorDashboard />}
//           />

//           <Route
//             path="/instructor-profile"
//             element={<ProfilePage />}
//           />

//           {/* Upload Resources Page */}
//           <Route
//             path="/instructor-dashboard/upload-resources"
//             element={<UploadResources />}
//           />

//           {/* Create Learning Path Page */}
//           <Route
//             path="/instructor-dashboard/create-learning-path"
//             element={<CreateLearningPath />}
//           />

//           {/* Add more routes as needed */}
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;


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

  // Check if current route is for the instructor
  const isInstructorRoute = location.pathname.includes('/instructor-dashboard');

  // Check if the current route is for the student
  const isStudentRoute = location.pathname.includes('/student-dashboard');

  return (
    <>
      {/* Render appropriate navbar based on the route */}
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
          
          {/* Instructor Routes */}
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

          {/* Student Dashboard Route */}
          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          />

          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
