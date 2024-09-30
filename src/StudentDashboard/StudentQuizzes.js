// src/components/Quizzes.js
import React from 'react';
import './Quizzes.css';

const Quizzes = ({ quizzes }) => {
    return (
        <div className="quizzes">
            <h3>Given Quizzes</h3>
            <ul>
                {quizzes.slice(0, 3).map((quiz, index) => (
                    <li key={index} className="quiz-item">
                        {quiz.title}
                    </li>
                ))}
            </ul>
            <button className="see-more-btn">See More</button>
        </div>
    );
};

export default Quizzes;
