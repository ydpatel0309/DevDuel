import React from 'react';
import "../CssFiles/quizz.css";
import { useNavigate } from 'react-router-dom';

export default function Result({ score, getRandomQuestions }) {
  const navigate = useNavigate();

  return (
    <div className="result">
      <h2 className='quizz-completed'>Quiz Completed!</h2>
      <h3 className='score'>Your final score is: {score}</h3>
      <button
        onClick={getRandomQuestions}
        className='restart'
      >
        Restart Quiz
      </button>
      <button
        onClick={() => navigate('/')}
        className='quit'
      >
        Quit
      </button>
    </div>
  );
}
