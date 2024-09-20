// src/components/StudentNavbar.js
import React from 'react';
import './StudentNavbar.css';
import Logo from "../images/Logo.png";

const StudentNavbar = () => {
    return (
        <div className="student-navbar">
            <div className="navbar-logo">
            <img src={Logo} alt="E-Volv Logo" />
            </div>
            <input type="text" className="navbar-search" placeholder="Search" />
            <div className="navbar-icons">
                <i className="fas fa-home"></i>
                <i className="fas fa-bell"></i>
                <div className="navbar-profile">
                    <i className="fas fa-user-circle"></i>
                    <div className="profile-dropdown">
                        <p>Username</p>
                        <p>Email</p>
                        <a href="/profile">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentNavbar;
