import React, { useState, useEffect } from 'react';
import shuffle from 'lodash/shuffle';
import { useLocation } from 'react-router-dom';
import "../CssFiles/quizz.css";
import allQuestions from '../data/questions.json'; 
import Result from './Result';

const colors = ['#2d70ae', '#2d9da6', '#efa929', '#d5546d'];

const QuizzApp = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const language = queryParams.get('language');

  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const [isHovered, setHovered] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (language && allQuestions[language]) {
      setShuffledQuestions(shuffle(allQuestions[language]).slice(0, 5));
    }
  }, [language]);

  useEffect(() => {
    if (currentQuestion < shuffledQuestions.length) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            handleNextQuestion();
            return prevTimer;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentQuestion, shuffledQuestions]);

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === shuffledQuestions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimer(0);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setTimer(10);
    setIsCorrect(null);
  };

  const getRandomQuestions = () => {
    setShuffledQuestions(shuffle(allQuestions[language]).slice(0, 5));
    setCurrentQuestion(0);
    setScore(0);
    setTimer(10);
    setIsCorrect(null);
  };

  return (
    <div className="wallpaper">
      <div className='outer'>
        {currentQuestion < shuffledQuestions.length ? (
          <div className='inner'>
            <div className='question-outer'>
              <h1 className='Question-heading'>Question {currentQuestion + 1}</h1>
              <p className='question'>{shuffledQuestions[currentQuestion].question}</p>
              <p className='time'>Time remaining: {timer} seconds</p>
            </div>
            <div className='mcq-outer'>
              <ul className='mcqs'>
                {shuffledQuestions[currentQuestion].options.map((option, index) => (
                  <td id="mcq-td"
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    style={{
                      backgroundColor: isHovered !== index ? colors[index] : '',
                      ...(isHovered === index && { backgroundColor: '#8f94fb' }),
                    }}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {option}
                  </td>
                ))}
              </ul>
            </div>
          </div>
        ) : (

          <Result score={score} getRandomQuestions={getRandomQuestions} shuffledQuestions={shuffledQuestions}/>
      
        )}
      </div>
    </div>
  );
};

export default QuizzApp;
