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
// import Card from "./components/Card";
// import CardGrid from "./components/CardGrid";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import './index.css'; // Ensure Tailwind is imported
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardGrid/>
      {/* <Card /> */}
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

