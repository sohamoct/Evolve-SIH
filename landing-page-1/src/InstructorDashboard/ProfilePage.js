// src/InstructorProfile/ProfilePage.js
import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    contactDetails: '',
    collegeName: '',
    areaOfInterest: '',
    gender: '',
    educationDetails: '',
    location: '',
    profilePhoto: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setProfile({ ...profile, profilePhoto: URL.createObjectURL(e.target.files[0]) });
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="profile-page">
      <h2>Instructor Profile</h2>
      <form className="profile-form">
        <div className="profile-photo-section">
          <img src={profile.profilePhoto || 'https://via.placeholder.com/150'} alt="Profile" />
          <div className="chooseFile">
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </div>
        </div>

        <div className="profile-details">
          <label>First Name</label>
          <input type="text" name="firstName" value={profile.firstName} onChange={handleInputChange} />

          <label>Middle Name</label>
          <input type="text" name="middleName" value={profile.middleName} onChange={handleInputChange} />

          <label>Last Name</label>
          <input type="text" name="lastName" value={profile.lastName} onChange={handleInputChange} />

          <label>Date of Birth</label>
          <input type="date" name="dateOfBirth" value={profile.dateOfBirth} onChange={handleInputChange} />
          {profile.dateOfBirth && <p>Age: {calculateAge(profile.dateOfBirth)}</p>}

          <label>Email</label>
          <input type="email" name="email" value={profile.email} onChange={handleInputChange} />

          <label>Mobile No.</label>
          <input type="text" name="contactDetails" value={profile.contactDetails} onChange={handleInputChange} />

          <label>College/Institution</label>
          <input type="text" name="collegeName" value={profile.collegeName} onChange={handleInputChange} />

          <label>Area of Interest</label>
          <input type="text" name="areaOfInterest" value={profile.areaOfInterest} onChange={handleInputChange} />

          <label>Gender</label>
          <select name="gender" value={profile.gender} onChange={handleInputChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Education Details</label>
          <textarea name="educationDetails" value={profile.educationDetails} onChange={handleInputChange} />

          <label>Location</label>
          <input type="text" name="location" value={profile.location} onChange={handleInputChange} />

          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
