import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-4">
        <img src="./images/HeroSectionimg.png" alt="hero" className="w-full rounded-lg shadow-lg"/>
        <div className="relative top-[-310px] right-[-500px] text-left bg-transperant mt-[0rem] bg-opacity-70 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {/* Design and Manage Your Learning Effortlessly */}
          </h2>
            <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700">
                      Learn More
            </button>
        </div>
        </div>
      <div>
          {/* <p className="italic text-xl text-gray-600">
              “Tell me and I forget, teach me and I may remember, involve me and I learn.”
            </p> */}
            <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;

