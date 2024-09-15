// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './StudentCardList.css';

// const students = [
//   { id: 1, name: 'Soham Shriram', score: 3768, indicator: 'green' },
//   { id: 2, name: 'Om Ranade', score: 3578, indicator: 'red' },
//   { id: 3, name: 'Ojas Mhatre', score: 3476, indicator: 'green' },
//   { id: 4, name: 'Aditya Wanve', score: 3125, indicator: 'red' },
//   { id: 5, name: 'Manish Sonawane', score: 2857, indicator: 'green' },
//   { id: 6, name: 'Lavina Tangralu', score: 2857, indicator: 'yellow' },
// ];

// const StudentCardList = () => {
//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/students'); // Navigate to the detailed student list
//   };

//   return (
//     <div className="student-card-list">
//       {students.map((student) => (
//         <div key={student.id} className="student-card">
//           <div className="student-rank">{student.id}</div>
//           <div className="student-info">
//             <img
//               className="student-profile-pic"
//               src={`https://i.pravatar.cc/150?img=${student.id}`}
//               alt={student.name}
//             />
//             <div className="student-details">
//               <span className="student-name">{student.name}</span>
//               <span className="student-score">{student.score}</span>
//             </div>
//           </div>
//           <div className={`student-indicator ${student.indicator}`}></div>
//         </div>
//       ))}
//       <button className="learn-more-button" onClick={handleLearnMore}>
//         Load More
//       </button>
//     </div>
//   );
// };

// export default StudentCardList;
