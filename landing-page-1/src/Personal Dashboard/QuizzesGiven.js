import React from 'react';
import './QuizzesGiven.css';

const QuizzesGiven = () => {
  return (
    <div className="quizzes-given">
      <h2>Quizzes Given</h2>
      <div className="quiz-list">
        <div className="quiz-item">
          <h3>Deep Learning Quiz</h3>
          <p>Score: 85%</p>
        </div>
        <div className="quiz-item">
          <h3>UI/UX Quiz</h3>
          <p>Score: 75%</p>
        </div>
        {/* More quizzes */}
      </div>
    </div>
  );
};

export default QuizzesGiven;
