import React from 'react';
import './YourCourses.css';

const YourCourses = () => {
  return (
    <div className="your-courses">
      <h2>Course you've enrolled in :</h2>
      <div className="course-slider">
        {/* Course Cards */}
        <div className="course-card">
          <div className="card-image">
            <img src="https://online.york.ac.uk/wp-content/uploads/2021/09/Illustration-of-a-brain-with-cogs-inside-and-pathways-outside-and-deep-learning-written-above.jpg" alt="Course" />
          </div>
          <div className="card-content">
            <h3>Deep Learning</h3>
            <p>fundamental of deep learning with hands-on experience</p>
            <div className="card-footer">
              <span>Ojas Mhatre</span>
              <span>6 Hours</span>
            </div>
          </div>
        </div>
        <div className="course-card">
          <div className="card-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s" alt="Course" />
          </div>
          <div className="card-content">
            <h3>Web development</h3>
            <p>fundamental of web dev with hands-on experience</p>
            <div className="card-footer">
              <span>Mark Zuckerberg</span>
              <span>8 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCourses;
