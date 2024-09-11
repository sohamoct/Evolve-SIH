import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
