// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './HomePage/Navbar';
import HeroSection from './HomePage/HeroSection';
import FeaturesSection from './HomePage/FeaturesSection';
import HighlightSection from './HomePage/HighlightSection';
import Footer from './HomePage/Footer';
import Carousel from './HomePage/Carousel';
import LoginPage from './LoginPage/LoginPage'; 
import SignUp from './SignUp/SignUp'; // Import the SignUp component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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
        <Route path="/login" element={<LoginPage />} /> {/* Add the route for LoginPage */}
        <Route path="/signup" element={<SignUp />} /> {/* Add the route for SignUp */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
