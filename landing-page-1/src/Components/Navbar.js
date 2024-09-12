// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../images/Logo.png'; // Import your logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="E-Volv Logo" />
        </a>

        {/* Toggler button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Login and Signup Buttons */}
          <div className="d-flex">
            <a className="btn btn-outline-light me-2" href="/">Login</a>
            <a className="btn btn-primary" href="/">Signup</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
