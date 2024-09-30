// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import heroImage from '../images/Hero Section Image.png'; // Ensure this is the correct path

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          Design and Manage Your Learning Path Dashboard<br />
          <span className="gradient-text">Effortlessly</span>
        </h1>
        {/* Remove the paragraph */}
        <button onClick={scrollToAbout} className="btn btn-primary btn-sm btn-explore">
          Explore
        </button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Learning Dashboard" />
      </div>
    </section>
  );
};

export default HeroSection;
