// src/components/CourseList.js
import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.css'; // For styling

const courses = [
  {
    image: 'https://images.unsplash.com/photo-1506748686214e9df14f6d4c7c6e2d5e0a1b15c0c2d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzUyOXwwfDF8c2VhcmNofDJ8fGdlbnJlJTIwbGVhcm5pbmclMjBhcHByb2FjaGV8ZW58MHx8fDE2NjY1NzQy&ixlib=rb-1.2.1&q=80&w=400', // Random image for Deep Learning
    title: 'Deep Learning Essentials',
    description: 'UI/UX Design & Graphic Design Tool',
  },
  {
    image: 'https://images.unsplash.com/photo-1585101545156-72edfc4e9d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzUyOXwwfDF8c2VhcmNofDJ8fGltYWdlJTIwcHJvY2Vzc2luZ3xlbnwwfHx8fDE2NjY1NzQy&ixlib=rb-1.2.1&q=80&w=400', // Random image for Image Processing
    title: 'Image Processing',
    description: 'UI/UX Design & Graphic Design Tool',
  },
  {
    image: 'https://images.unsplash.com/photo-1560433814-6d1be0d2c012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzUyOXwwfDF8c2VhcmNofDJ8fHVpLXV4JTIwbGVhcm5pbmclMjBhcHByb2FjaGV8ZW58MHx8fDE2NjY1NzQy&ixlib=rb-1.2.1&q=80&w=400', // Random image for UI/UX
    title: 'UI/UX',
    description: 'UI/UX Design & Graphic Design Tool',
  },
  {
    image: 'https://images.unsplash.com/photo-1552566033-03911e6a8a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzUyOXwwfDF8c2VhcmNofDJ8fERhdGElMjBTdHJ1Y3R1cmVzfGVufDB8fHx8MTY2NjU3NDI&ixlib=rb-1.2.1&q=80&w=400', // Random image for Data Structures
    title: 'Data Structures',
    description: 'UI/UX Design & Graphic Design Tool',
  },
  {
    image: 'https://images.unsplash.com/photo-1567152413-0eae76f4e5f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzUyOXwwfDF8c2VhcmNofDJ8fERldk9wcyUyMGFwcHJvYWNoZXxlbnwwfHx8fDE2NjY1NzQy&ixlib=rb-1.2.1&q=80&w=400', // Random image for DevOps
    title: 'DevOps',
    description: 'UI/UX Design & Graphic Design Tool',
  },
  {
    image: 'https://images.unsplash.com/photo-1581091851323-b254167bbf84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzUyOXwwfDF8c2VhcmNofDJ8fEN5YmVyJTIwU2VjdXJpdHk%3D&ixlib=rb-1.2.1&q=80&w=400', // Random image for Cyber Security
    title: 'Cyber Security',
    description: 'UI/UX Design & Graphic Design Tool',
  },
];

const CourseList = () => {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          image={course.image}
          title={course.title}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default CourseList;
