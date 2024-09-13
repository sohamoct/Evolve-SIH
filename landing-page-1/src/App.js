// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './HomePage/Navbar';
import HeroSection from './HomePage/HeroSection';
import FeaturesSection from './HomePage/FeaturesSection';
import HighlightSection from './HomePage/HighlightSection';
import Footer from './HomePage/Footer';
import Carousel from './HomePage/Carousel';
import LoginPage from './LoginPage/LoginPage'; // Import the LoginPage component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mt-5">
              <HeroSection />
              <FeaturesSection />
              <HighlightSection />
              <Carousel />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} /> {/* Add the route for LoginPage */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
