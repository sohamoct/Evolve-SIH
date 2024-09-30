// src/HomePage/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../images/Logo.png'; // Import your logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="E-Volv Logo" />
        </Link>

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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link> {/* Direct to home */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features-section">Features</a> {/* Scroll to Features */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#carousel-section">About Us</a> {/* Scroll to Carousel */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Contact Us</a> {/* Scroll to Footer */}
            </li>
          </ul>

          {/* Login and Signup Buttons */}
          <div className="d-flex">
            <Link className="btn btn-outline-light me-2" to="/login">
              <span>Login</span>
            </Link>
            <a className="btn btn-primary" href="/signup">Signup</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
