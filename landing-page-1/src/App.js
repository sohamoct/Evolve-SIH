// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FeaturesSection from './Components/FeaturesSection';
import HighlightSection from './Components/HighlightSection';
import Footer from './Components/Footer';
import Carousel from "./Components/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <HeroSection />
        <FeaturesSection />
        <HighlightSection />
        <Carousel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
