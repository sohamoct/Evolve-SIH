import React from "react";
import Button from "./Button"; // Adjust the import path as necessary
import Button2 from "./Button2"; // Adjust the import path as necessary

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white flex items-center p-2 fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="./images/image.png"
          alt="E-VOLV Logo"
          className="h-12 md:h-15 w-auto object-contain"
          style={{ maxHeight: "64px" }}
        />
      </div>

      {/* Navigation Links */}
      <div className="flex-grow flex items-center justify-center space-x-4 md:space-x-10">
        <a href="#home" className="hover:underline text-sm md:text-base">Home</a>
        <a href="#about" className="hover:underline text-sm md:text-base">About Us</a>
        <a href="#features" className="hover:underline text-sm md:text-base">Features</a>
        <a href="#contactUs" className="hover:underline text-sm md:text-base">Contact Us</a>
      </div>

      {/* Custom Buttons */}
      <div className="flex-shrink-0 space-x-2 px-8">
        <Button />
      </div>
      <div className="flex-shrink-0 space-x-2">
        <Button2/>
      </div>
      
    </nav>
  );
};

export default Navbar;
