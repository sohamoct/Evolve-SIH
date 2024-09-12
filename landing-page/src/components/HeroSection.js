import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-0 bg-gray-50">
<div className="max-w-full mx-auto">
  {/* Hero Section with Learn More button */}
  <div className="relative mb-8 h-screen">
    <img src="./images/HeroSectionimg.png" alt="hero" className="w-full h-full object-cover"/>
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="relative bg-transperant bg-opacity-70 p-6 rounded-lg text-left" style={{top:'6%',left:'18%'}}>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  </div>

  {/* Quote Section with Centered Text and Get Started Button */}
  <div className="relative mt-20 flex flex-col items-center">
    <img src="./images/quoteimg.png" alt="quote background" className="w-full max-w-2xl h-auto object-cover rounded-lg"/>
    <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
      <p className="italic text-2xl text-gray-600 text-center">
        “Tell me and I forget, teach me and
        <br></br>
         I may remember, involve me and I learn.”
      </p>
    </div>
  </div>

  {/* Get Started Button Centered Below Quote */}
  <div className="flex justify-center mt-8">
    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
      Get Started
    </button>
  </div>
</div>

    </section>
  );
};

export default HeroSection;

