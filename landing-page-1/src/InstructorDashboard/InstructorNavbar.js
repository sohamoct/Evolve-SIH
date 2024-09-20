// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './InstructorNavbar.css';
// import logo from '../images/Logo.png';
// import profilePic from '../images/profilePic.jpg';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

// const InstructorNavbar = () => {
//   // State to manage notifications
//   const [hasNewNotifications, setHasNewNotifications] = useState(true); // Initially set to true (new notifications)
//   const [showNotifications, setShowNotifications] = useState(false); // For showing the notification dropdown
//   const [showProfile, setShowProfile] = useState(false);

//   // Function to mark notifications as seen
//   const handleNotificationClick = () => {
//     setHasNewNotifications(false); // Mark notifications as seen
//     setShowNotifications(!showNotifications); // Toggle notification dropdown visibility
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         {/* Brand Logo */}
//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="E-Volv Logo" style={{ width: '100px' }} />
//         </Link>

//         {/* Search Bar */}
//         <form className="d-flex ms-3" style={{ width: '500px' }}>
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         </form>

//         {/* Navbar Menu Items */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mx-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/create-learning-path">Create Learning Path</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/upload-resources">Upload Resources</Link>
//             </li>
//           </ul>

//           {/* Notification and Profile */}
//           <div className="d-flex align-items-center position-relative">
//             {/* Notification Icon */}
//             <span
//               className="notification-icon mx-3"
//               onClick={handleNotificationClick}
//               style={{ cursor: 'pointer' }}
//             >
//               <i
//                 className="fas fa-bell"
//                 style={{
//                   fontSize: '1.5rem',
//                   color: hasNewNotifications ? 'yellow' : 'white', // Turn yellow if there are new notifications
//                   transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
//                 }}
//               ></i>
//             </span>

//             {/* Notification Dropdown */}
//             {showNotifications && (
//               <div
//                 className="notifications-dropdown"
//                 style={{
//                   position: 'absolute',
//                   top: '100%',
//                   right: '50px',
//                   backgroundColor: 'white',
//                   padding: '10px',
//                   borderRadius: '5px',
//                   boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
//                   zIndex: 100,
//                 }}
//               >
//                 <p>No new notifications</p> {/* Replace with dynamic notification list */}
//               </div>
//             )}

//             {/* Profile Picture and Popup */}
//             <div
//               className="position-relative"
//               onMouseEnter={() => setShowProfile(true)}
//               onMouseLeave={() => setShowProfile(false)}
//               style={{ cursor: 'pointer' }}
//             >
//               {/* Profile Icon */}
//               <img
//                 src={profilePic}
//                 alt="Profile"
//                 style={{
//                   width: '40px',
//                   height: '40px',
//                   borderRadius: '50%',
//                   objectFit: 'cover',
//                   transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
//                 }}
//               />
//               {showProfile && (
//                 <div
//                   className="profile-popup"
//                   style={{
//                     position: 'absolute',
//                     right: 0,
//                     backgroundColor: 'white',
//                     padding: '10px',
//                     borderRadius: '5px',
//                     boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
//                     zIndex: 100,
//                     transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
//                   }}
//                 >
//                   <img
//                     src={profilePic}
//                     alt="Profile"
//                     style={{ width: '100px', borderRadius: '50%' }}
//                   />
//                   <p>Instructor Name</p>
//                   <p>Email: instructor@example.com</p>
//                   <Link to="/instructor-profile">View Profile</Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default InstructorNavbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InstructorNavbar.css'; // Importing the updated CSS
import logo from '../images/Logo.png';
import profilePic from '../images/TrackLearning.png';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const InstructorNavbar = () => {
  const [hasNewNotifications, setHasNewNotifications] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleNotificationClick = () => {
    setHasNewNotifications(false); // Mark notifications as seen
    setShowNotifications(!showNotifications); // Toggle notification dropdown visibility
  };

  return (
    <nav className="instructor-navbar navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="instructor-container container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="E-Volv Logo" className="instructor-logo" />
        </Link>

        {/* Search Bar */}
        <form className="d-flex ms-3 instructor-search-bar">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="instructor-navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-learning-path">Create Learning Path</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upload-resources">Upload Resources</Link>
            </li>
          </ul>

          {/* Notification & Profile */}
          <div className="d-flex align-items-center instructor-position-relative">
            {/* Notification Icon */}
            <span
              className="instructor-notification-icon mx-3"
              onClick={handleNotificationClick}
            >
              <i
                className={`fas fa-bell ${hasNewNotifications ? 'instructor-new-notifications' : ''}`}
              ></i>
            </span>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="instructor-notifications-dropdown">
                <p>No new notifications</p> {/* Replace with dynamic notifications */}
              </div>
            )}

            {/* Profile Picture and Popup */}
            <div
              className="instructor-profile-picture"
              onMouseEnter={() => setShowProfile(true)}
              onMouseLeave={() => setShowProfile(false)}
            >
              <img
                src={profilePic}
                alt="Profile"
                className="instructor-profile-pic"
              />
              {showProfile && (
                <div className="instructor-profile-popup">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="instructor-popup-profile-pic"
                  />
                  <p>Instructor Name</p>
                  <p>Email: instructor@example.com</p>
                  <Link to="/instructor-profile">View Profile</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InstructorNavbar;
