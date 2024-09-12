// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FeaturesSection from './Components/FeaturesSection';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <HeroSection />
        <FeaturesSection />
      </div>
    </div>
  );
}

export default App;
