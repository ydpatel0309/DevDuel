import React, { useState, useEffect } from 'react';
import shuffle from 'lodash/shuffle';
import { useLocation } from 'react-router-dom';
import "../CssFiles/quizz.css";

const colors = ['#2d70ae', '#2d9da6', '#efa929', '#d5546d'];

const allQuestions = {
  javascript: [
    {
      question: 'What is the result of the following expression: 5 + "10"?',
      options: ['15', '510', '510 (string)', 'Error'],
      correctAnswer: '510 (string)',
      time: 15,
    },
    {
      question: 'Which keyword is used to declare a constant in JavaScript?',
      options: ['const', 'let', 'var', 'constant'],
      correctAnswer: 'const',
      time: 20,
    },
    {
      question: 'What is the purpose of the `setTimeout` function in JavaScript?',
      options: ['To execute a function after a specified delay', 'To set a timer for the page', 'To delay the execution of the entire script', 'To create a recurring timer'],
      correctAnswer: 'To execute a function after a specified delay',
      time: 25,
    },
    {
      question: 'How do you check the type of a variable in JavaScript?',
      options: ['typeof variable', 'typeOf(variable)', 'type(variable)', 'checkType(variable)'],
      correctAnswer: 'typeof variable',
      time: 15,
    },
    {
      question: 'What does the `Array.map` method do in JavaScript?',
      options: ['Modifies each element of the array', 'Creates a new array with the results of calling a provided function on every element', 'Removes elements from the array', 'Returns the first element of the array'],
      correctAnswer: 'Creates a new array with the results of calling a provided function on every element',
      time: 20,
    },
  ],
  java: [
    {
      question: 'Which keyword is used to define a class in Java?',
      options: ['class', 'Class', 'define', 'public'],
      correctAnswer: 'class',
      time: 15,
    },
    {
      question: 'What is the output of the following code snippet: System.out.println(10 / 3);',
      options: ['3', '3.33', '3.0', 'Error'],
      correctAnswer: '3',
      time: 20,
    },
    {
      question: 'Which method is used to start a thread in Java?',
      options: ['run()', 'start()', 'begin()', 'init()'],
      correctAnswer: 'start()',
      time: 25,
    },
    {
      question: 'Which of the following is not a Java feature?',
      options: ['Object-oriented', 'Use of pointers', 'Portable', 'Dynamic'],
      correctAnswer: 'Use of pointers',
      time: 15,
    },
    {
      question: 'Which of the following is a superclass of all classes in Java?',
      options: ['Object', 'Class', 'Superclass', 'Parent'],
      correctAnswer: 'Object',
      time: 20,
    },
  ],
  cpp: [
    {
      question: 'What is the extension for a C++ source file?',
      options: ['.c', '.cpp', '.class', '.java'],
      correctAnswer: '.cpp',
      time: 15,
    },
    {
      question: 'Which operator is used to access members of a class in C++?',
      options: ['.', '->', '::', '#'],
      correctAnswer: '.',
      time: 20,
    },
    {
      question: 'What is the output of the following code: cout << 5 / 2;',
      options: ['2.5', '2', '2.0', 'Error'],
      correctAnswer: '2',
      time: 25,
    },
    {
      question: 'Which of the following is not a standard C++ library?',
      options: ['iostream', 'string', 'vector', 'stdio.h'],
      correctAnswer: 'stdio.h',
      time: 15,
    },
    {
      question: 'What is the use of the "new" operator in C++?',
      options: ['Allocate memory', 'Release memory', 'Compare values', 'None of the above'],
      correctAnswer: 'Allocate memory',
      time: 20,
    },
  ],
};

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
          <div className="result">
            <h2 className='quizz-completed'>Quiz Completed!</h2>
            <h3 className='score'>Your final score is: {score}</h3>
            <button
              onClick={getRandomQuestions}
              className='restart'
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizzApp;
