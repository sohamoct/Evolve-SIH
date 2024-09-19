import React, { useState } from 'react';
import './PersonalNavbar.css';
import logo from '../images/Logo.png';


const PersonalNavbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Toggle the dropdown on hover
  const handleMouseEnter = () => {
    setShowProfileDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowProfileDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Search courses" />
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <div className="navbar-icon">
          <i className="fas fa-bell"></i> {/* Notification Icon */}
        </div>
        <div 
          className="navbar-profile"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fas fa-user-circle"></i> {/* Profile Icon */}
          {showProfileDropdown && (
            <div className="profile-dropdown">
              <p><strong>John Doe</strong></p>
              <p>johndoe@gmail.com</p>
              <a href="/profile">View Profile</a>
            </div>
          )}
        </div>
        
      </div>
    </nav>
  );
};

export default PersonalNavbar;
