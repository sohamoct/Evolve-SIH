import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white flex justify-between p-4">
        <div className="font-bold text-xl">E-VOLV</div>
        <div className="space-x-4">
          <button className="bg-white text-blue-900 px-4 py-1 rounded">Login</button>
          <button className="bg-white text-blue-900 px-4 py-1 rounded">SignUp</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-4">
            <img src="/Common Landing Page.png" alt="hero" className="w-full rounded-lg shadow-lg"/>
            <div className="absolute top-0 right-0 text-left bg-white bg-opacity-70 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Design and Manage Your Learning Effortlessly</h2>
              <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
          <p className="italic text-xl text-gray-600">“Tell me and I forget, teach me and I may remember, involve me and I learn.”</p>
          <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Who are we */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Who are We?</h3>
              <p>We're dedicated to transforming education with our intuitive Learning Path Dashboard, designed for both instructors and students.</p>
              <button className="mt-4 text-blue-600 underline">View More</button>
            </div>
            {/* What we do */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">What We Do?</h3>
              <p>Create Custom Learning Paths: Easily upload and organize diverse resources. Track progress, view detailed statistics, and engage effortlessly.</p>
              <button className="mt-4 text-blue-600 underline">View More</button>
            </div>
            {/* Our Mission */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p>We aim to make education more efficient, accessible, and impactful, empowering users to achieve their full potential.</p>
              <button className="mt-4 text-blue-600 underline">View More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About Us</a>
          <a href="#" className="hover:text-blue-400">Contact Us</a>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">WhatsApp</a>
          <a href="#" className="hover:text-blue-400">Facebook</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
