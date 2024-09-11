import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Who are We?</h3>
            <p>We're dedicated to transforming education with our intuitive Learning Path Dashboard, designed for both instructors and students.</p>
            <button className="mt-4 text-blue-600 underline">View More</button>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">What We Do?</h3>
            <p>Create Custom Learning Paths: Easily upload and organize diverse resources. Track progress, view detailed statistics, and engage effortlessly.</p>
            <button className="mt-4 text-blue-600 underline">View More</button>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p>We aim to make education more efficient, accessible, and impactful, empowering users to achieve their full potential.</p>
            <button className="mt-4 text-blue-600 underline">View More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
