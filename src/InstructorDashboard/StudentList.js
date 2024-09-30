import React from "react";

const StudentList = ({ students }) => (
  <div className="student-list">
    <h2>Enrolled Students</h2>
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          <img src={student.profilePic} alt={student.name} />
          <span>{student.name}</span>
          <span className={`zone ${student.zone}`}>{student.zone}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default StudentList;
