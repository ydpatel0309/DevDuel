import React, { useState, useEffect } from 'react';
import shuffle from 'lodash/shuffle';
import "../CssFiles/quizz.css";


const colors = ['#2d70ae', '#2d9da6', '#efa929', '#d5546d']; 
const questions = [
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
  {
    question: 'What does the CSS acronym stand for?',
    options: ['Counter Strike: Source', 'Corrective Style Sheet', 'Computer Style Sheet', 'Cascading Style Sheet'],
    correctAnswer: 'Cascading Style Sheet',
    time: 15,
  },
  {
    question: 'Which programming language is often used for web development alongside HTML and CSS?',
    options: ['Java', 'Python', 'JavaScript', 'C++'],
    correctAnswer: 'JavaScript',
    time: 20,
  },
  {
    question: 'What is the purpose of the "git clone" command in Git?',
    options: ['To create a new branch', 'To copy a repository from a remote source', 'To merge branches', 'To delete a repository'],
    correctAnswer: 'To copy a repository from a remote source',
    time: 25,
  },
 {
    question: 'What is the purpose of the "npm" command in Node.js?',
    options: ['Node Package Manager', 'New Project Manager', 'Node Project Manager', 'Node Process Manager'],
    correctAnswer: 'Node Package Manager',
    time: 15,
  },
  {
    question: 'Which of the following is a dynamically typed programming language?',
    options: ['Java', 'C++', 'Python', 'C#'],
    correctAnswer: 'Python',
    time: 20,
  },
  {
    question: 'What is the role of the "else" statement in an if-else statement in programming?',
    options: ['Terminate the program', 'Define an alternative code block to execute if the condition is false', 'Define the main code block to execute', 'Skip the current iteration of a loop'],
    correctAnswer: 'Define an alternative code block to execute if the condition is false',
    time: 25,
  },
  {
    question: 'Which HTML tag is used to link an external CSS file?',
    options: ['<link>', '<style>', '<css>', '<href>'],
    correctAnswer: '<link>',
    time: 15,
  },
  {
    question: 'What is the purpose of the "this" keyword in JavaScript?',
    options: ['To refer to the current object', 'To declare a variable', 'To create a loop', 'To handle exceptions'],
    correctAnswer: 'To refer to the current object',
    time: 20,
  },
  {
    question: 'Which of the following is NOT a valid JavaScript variable name?',
    options: ['myVariable', '_variable', '123variable', 'variable123'],
    correctAnswer: '123variable',
    time: 25,
  },
  {
    question: 'What is the significance of the "404" HTTP status code?',
    options: ['Server Error', 'Not Found', 'OK', 'Unauthorized'],
    correctAnswer: 'Not Found',
    time: 15,
  },
  {
    question: 'In Python, what does the "len()" function do?',
    options: ['Returns the length of a string or list', 'Converts a string to lowercase', 'Generates a random number', 'Raises a number to a power'],
    correctAnswer: 'Returns the length of a string or list',
    time: 20,
  },
  {
    question: 'What is the purpose of the SQL statement "SELECT"?',
    options: ['Update data in a database', 'Insert new data into a table', 'Retrieve data from a database', 'Delete data from a table'],
    correctAnswer: 'Retrieve data from a database',
    time: 25,
  },
  {
    question: 'Which of the following is a valid JSON format?',
    options: ['{ name: "John", age: 30 }', '[ "apple", "orange", "banana" ]', 'Both', 'None of the above'],
    correctAnswer: 'Both',
    time: 15,
  },
  {
    question: 'What does the acronym API stand for?',
    options: ['Automated Programming Interface', 'Application Programming Interface', 'Advanced Programming Integration', 'Automated Protocol Interaction'],
    correctAnswer: 'Application Programming Interface',
    time: 20,
  },
  {
    question: 'In Java, what is the keyword used to implement inheritance?',
    options: ['extends', 'inherits', 'implement', 'extends class'],
    correctAnswer: 'extends',
    time: 25,
  },
  {
    question: 'What is the purpose of the "addEventListener" method in JavaScript?',
    options: ['Add a new HTML element', 'Create a function', 'Attach an event handler to an element', 'Remove an HTML element'],
    correctAnswer: 'Attach an event handler to an element',
    time: 15,
  },
  {
    question: 'Which sorting algorithm has the best time complexity in the average case?',
    options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 'Merge Sort',
    time: 20,
  },
  {
    question: 'What is the default port number for the HTTP protocol?',
    options: ['80', '443', '8080', '21'],
    correctAnswer: '80',
    time: 25,
  },
  {
    question: 'Which of the following is NOT a valid JavaScript data type?',
    options: ['Boolean', 'String', 'Float', 'Array'],
    correctAnswer: 'Float',
    time: 15,
  },
  {
    question: 'What is the purpose of the "localStorage" object in web development?',
    options: ['Store data in the browser permanently', 'Send data to a server', 'Handle HTTP requests', 'Animate elements on a webpage'],
    correctAnswer: 'Store data in the browser permanently',
    time: 20,
  },
  {
    question: 'Which keyword is used to prevent the further execution of a loop in JavaScript?',
    options: ['halt', 'break', 'stop', 'exit'],
    correctAnswer: 'break',
    time: 25,
  },
  {
    question: 'What does the acronym MVC stand for in the context of software architecture?',
    options: ['Model-View-Controller', 'Multiple View Configuration', 'Most Valuable Code', 'Model-View-Configuration'],
    correctAnswer: 'Model-View-Controller',
    time: 15,
  },
];

const QuizzApp = () =>
{
  const [shuffledQuestions, setShuffledQuestions] = useState(shuffle(questions).slice(0, 5));

  const [isHovered, setHovered] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timer, setTimer] = useState(10); 

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
    setShuffledQuestions(shuffle(questions).slice(0, 5));
    setCurrentQuestion(0);
    setScore(0);
    setTimer(10);
    setIsCorrect(null);
  };

  return (
    <>
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
          <ul className='mcqs'  >
            {shuffledQuestions[currentQuestion].options.map((option, index) => (
              <td id="mcq-td" 
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{                 
                  backgroundColor: isHovered != index ? colors[index] : '',
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

          <div>
          </div>
        </div>
      ) : (
        <div  classname="result">
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
    </>);
 
};

export default QuizzApp;