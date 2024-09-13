// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import Button from './Button.js';
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
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact Us</Link>
            </li>
          </ul>

          {/* Login and Signup Buttons */}
          <div className="d-flex">
            <Link className="btn btn-outline-light me-2" to="/login">Login</Link> {/* Update to use Link */}
            <a className="btn btn-primary" href="/">Signup</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
