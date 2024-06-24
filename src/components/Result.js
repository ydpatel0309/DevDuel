import React from 'react';
import "../CssFiles/quizz.css";
import { useNavigate } from 'react-router-dom';

export default function Result({ score, getRandomQuestions,shuffledQuestions }) {
  const navigate = useNavigate();

  function downloadQuestions()
  {
    const element = document.createElement("a");
    //BLOB stands for a “Binary Large Object,” a data type that stores binary data
    const file = new Blob([JSON.stringify(shuffledQuestions)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "attempted_questions.txt";
    document.body.appendChild(element); 
    element.click();
  } 


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

      <button onClick={downloadQuestions} className='download'>
        Download Questions
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
