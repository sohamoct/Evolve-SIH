/*
import React from "react";
import LandingPage from "./LandingPage";
import './index.css'; // Ensure Tailwind is imported

function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App; */


import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import './index.css'; // Ensure Tailwind is imported

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

