import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

const firstTestQuestions = [
  {
    question: "What is HTML?",
    options: ["A markup language", "A programming language", "A database"],
    correct: 0,
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
    correct: 0,
  },
  {
    question: "What does JavaScript allow you to do on a website?",
    options: ["Create interactive elements", "Design the layout", "Add multimedia"],
    correct: 0,
  },
  {
    question: "Which tag is used to define a hyperlink in HTML?",
    options: ["<a>", "<div>", "<span>"],
    correct: 0,
  },
  {
    question: "Which of the following is a CSS property?",
    options: ["background-color", "text-decoration", "font-size"],
    correct: 0,
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    options: ["Contains metadata", "Displays page content", "Creates a footer"],
    correct: 0,
  },
  {
    question: "What is the primary purpose of a server?",
    options: ["Host websites", "Design websites", "Write code"],
    correct: 0,
  },
  {
    question: "Which JavaScript framework is used for building UI components?",
    options: ["React", "Node.js", "Express"],
    correct: 0,
  },
  {
    question: "What does the 'box model' in CSS describe?",
    options: ["Layout of elements", "How to organize files", "How to style text"],
    correct: 0,
  },
  {
    question: "What is the main difference between CSS and SCSS?",
    options: ["SCSS allows nesting", "CSS is more powerful", "SCSS is faster to load"],
    correct: 0,
  },
  {
    question: "Which of these is a valid React hook?",
    options: ["useState", "useRender", "useComponent"],
    correct: 0,
  },
  {
    question: "What is the use of React's 'componentDidMount' method?",
    options: ["Runs after the component is rendered", "Handles state changes", "Defines UI elements"],
    correct: 0,
  },
  {
    question: "What is the primary function of JavaScript?",
    options: ["Make web pages interactive", "Style web pages", "Define layout of pages"],
    correct: 0,
  },
  {
    question: "Which tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>"],
    correct: 0,
  },
  {
    question: "Which HTML attribute specifies the image source?",
    options: ["src", "alt", "href"],
    correct: 0,
  },
  {
    question: "What does the 'display: flex' property do in CSS?",
    options: ["Makes elements align horizontally", "Makes elements stack vertically", "Makes elements transparent"],
    correct: 0,
  },
  {
    question: "Which of these is not a data type in JavaScript?",
    options: ["boolean", "string", "decimal"],
    correct: 2,
  },
  {
    question: "What is the role of the <footer> tag in HTML?",
    options: ["Defines the footer of the page", "Defines the header of the page", "Defines the navigation menu"],
    correct: 0,
  },
  {
    question: "Which tag is used to define a paragraph in HTML?",
    options: ["<p>", "<h1>", "<div>"],
    correct: 0,
  },
  {
    question: "Which tool is commonly used to manage dependencies in JavaScript projects?",
    options: ["npm", "git", "bash"],
    correct: 0,
  },
  {
    question: "What is the purpose of the <script> tag in HTML?",
    options: ["To embed JavaScript code", "To create tables", "To format text"],
    correct: 0,
  },
  {
    question: "What is ReactJS?",
    options: ["A JavaScript library for building user interfaces", "A CSS framework", "A JavaScript runtime environment"],
    correct: 0,
  },
  {
    question: "Which CSS property controls the visibility of elements?",
    options: ["visibility", "display", "opacity"],
    correct: 1,
  },
  {
    question: "What does 'responsive design' in web development mean?",
    options: ["Design that adapts to different screen sizes", "Design that uses fancy animations", "Design with complex code"],
    correct: 0,
  },
  {
    question: "Which of the following is the correct HTML5 doctype?",
    options: ["<!DOCTYPE html>", "<!DOCTYPE html5>", "<html>"],
    correct: 0,
  },
  {
    question: "Which of these is used to style HTML elements in a web page?",
    options: ["CSS", "HTML", "JavaScript"],
    correct: 0,
  },
  {
    question: "What does the 'alt' attribute in an <img> tag provide?",
    options: ["Image description for accessibility", "Defines the image source", "Links to the image"],
    correct: 0,
  },
  {
    question: "Which method is used to change the content of an HTML element with JavaScript?",
    options: ["getElementById()", "innerHTML", "textContent"],
    correct: 1,
  },
  {
    question: "Which language is primarily used for web styling?",
    options: ["CSS", "JavaScript", "HTML"],
    correct: 0,
  },
  {
    question: "Which React method is used for handling component state?",
    options: ["useState", "render", "componentDidMount"],
    correct: 0,
  },
  {
    question: "What is 'GitHub' used for?",
    options: ["Version control", "Website hosting", "Database management"],
    correct: 0,
  },
  {
    question: "Which of these is a JavaScript method to add an event listener?",
    options: ["addEventListener", "addClick", "onClick"],
    correct: 0,
  },
  ];

const secondTestQuestions = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Hyper Transfer Markup Language", "HighText Markup Language"],
    correct: 0,
  },
  {
    question: "What does CSS allow you to do?",
    options: ["Style the appearance of web pages", "Structure web pages", "Program website functionality"],
    correct: 0,
  },
  {
    question: "Which of these is a valid JavaScript variable declaration?",
    options: ["let myVar", "var myVar", "const myVar", "All of the above"],
    correct: 3,
  },
  {
    question: "Which tag is used to create an ordered list in HTML?",
    options: ["<ul>", "<ol>", "<li>"],
    correct: 1,
  },
  {
    question: "Which of the following is a valid CSS property?",
    options: ["font-family", "text-color", "bg-color"],
    correct: 0,
  },
  {
    question: "Which HTML element is used to define a link?",
    options: ["<link>", "<a>", "<href>"],
    correct: 1,
  },
  {
    question: "What is the purpose of JavaScript's 'console.log()' method?",
    options: ["Print output to the console", "Define a function", "Create a loop"],
    correct: 0,
  },
  {
    question: "Which tag is used to include an image in HTML?",
    options: ["<img>", "<image>", "<picture>"],
    correct: 0,
  },
  {
    question: "Which JavaScript function is used to parse a string as a number?",
    options: ["parseInt()", "parseString()", "toNumber()"],
    correct: 0,
  },
  {
    question: "What does the 'background-color' CSS property do?",
    options: ["Changes text color", "Sets the background color of an element", "Sets the font style"],
    correct: 1,
  },
  {
    question: "Which of these is used to add a comment in JavaScript?",
    options: ["// comment", "<!-- comment -->", "# comment"],
    correct: 0,
  },
  {
    question: "Which JavaScript method is used to convert a string to lowercase?",
    options: ["toLowerCase()", "toLower()", "lowercase()"],
    correct: 0,
  },
  {
    question: "What is the purpose of the <div> tag in HTML?",
    options: ["Defines a division or section", "Defines a link", "Defines a paragraph"],
    correct: 0,
  },
  {
    question: "Which of the following is a valid CSS selector?",
    options: [".class-name", "#id-name", "div"],
    correct: 0,
  },
  {
    question: "Which method is used to add a new item to an array in JavaScript?",
    options: ["push()", "pop()", "shift()"],
    correct: 0,
  },
  {
    question: "What is the purpose of the 'z-index' property in CSS?",
    options: ["Controls the stacking order of elements", "Sets the size of elements", "Sets the font color"],
    correct: 0,
  },
 ];

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [testEnded, setTestEnded] = useState(false);
  const [isSecondTest, setIsSecondTest] = useState(false);
  const [timer, setTimer] = useState(600); // Timer (seconds)
  const [questionAnswered, setQuestionAnswered] = useState(false); // Track if the question is answered
  
  const answersRef = useRef(null); // For scrolling to answers section
  const timerRef = useRef(null);

  const questions = isSecondTest ? secondTestQuestions : firstTestQuestions;

  // Handle the timer
  useEffect(() => {
    if (timer > 0 && !testEnded) {
      timerRef.current = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      clearInterval(timerRef.current);
      handleFinishTest(); // Finish test automatically when time runs out
    }
    return () => clearInterval(timerRef.current); // Clean up on component unmount
  }, [timer, testEnded]);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setQuestionAnswered(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setAnswers([...answers, selectedAnswer]);
      setSelectedAnswer(null);
      setQuestionAnswered(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setTestEnded(true);
        setShowPopup(true);
      }
    }
  };

  const handleFinishTest = () => {
    if (selectedAnswer !== null) {
      setAnswers([...answers, selectedAnswer]);
    }
    setTestEnded(true);
    setShowPopup(true);
  };

  const handleNextTest = () => {
    setIsSecondTest(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setTestEnded(false);
    setShowPopup(false);
    setTimer(60); // Reset the timer for the second test
  };

  const handleRestartTest = () => {
    setIsSecondTest(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setTestEnded(false);
    setShowPopup(false);
    setTimer(60); // Reset the timer for the first test
  };

  const calculateScore = () => {
    return answers.reduce(
      (score, answer, index) => (answer === questions[index].correct ? score + 1 : score),
      0
    );
  };

  const handleScrollToAnswers = () => {
    answersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAnswerClick = (answer, correctAnswer, isCorrect) => {
    setPopupContent({ answer, correctAnswer, isCorrect });
    setShowPopup(true);
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupContent(null);
  };

  const correctAnswers = calculateScore();
  const totalQuestions = questions.length;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <motion.div
        className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Timer */}
        <div className="text-center mb-4">
        <h3 className="text-lg font-semibold">Time Remaining: {formatTime(timer)}</h3>
        </div>

        {currentQuestion < questions.length && !testEnded ? (
          <>
            <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedAnswer === index ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  {option}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleNextQuestion}
                disabled={!questionAnswered}
                className="w-full py-3 bg-blue-600 text-white rounded-lg"
              >
                Next Question
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleFinishTest}
                disabled={!questionAnswered}
                className="w-full py-3 bg-red-600 text-white rounded-lg ml-4"
              >
                Finish Test
              </motion.button>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-4">Test Completed!</h2>
            <p className="text-lg mb-4">
              You got {correctAnswers} out of {totalQuestions} correct.
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToAnswers}
              className="w-full py-3 bg-green-600 text-white rounded-lg"
            >
              View Answers
            </motion.button>
            {isSecondTest ? (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleRestartTest}
                className="w-full py-3 bg-gray-600 text-white rounded-lg mt-4"
              >
                Restart First Test
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleNextTest}
                className="w-full py-3 bg-gray-600 text-white rounded-lg mt-4"
              >
                Next Test
              </motion.button>
            )}
          </div>
        )}
      </motion.div>

      {/* Answers Section */}
      {testEnded && (
        <div ref={answersRef} className="w-full max-w-4xl mt-8 p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Answers</h3>
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Your Answer</th>
                <th className="border border-gray-300 px-4 py-2">Correct Answer</th>
                <th className="border border-gray-300 px-4 py-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {answers.map((answer, index) => {
                const isCorrect = answer === questions[index].correct;
                const correctAnswer = questions[index].options[questions[index].correct];
                return (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                    <td
                      className="border border-gray-300 px-4 py-2 cursor-pointer text-center"
                      onClick={() => handleAnswerClick(questions[index].options[answer], correctAnswer, isCorrect)}
                    >
                      {questions[index].options[answer] || "No Answer"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{correctAnswer}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {isCorrect ? <FaCheck color="green" /> : <FaTimes color="red" />}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Popup */}
      {showPopup && popupContent && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">
              {popupContent.isCorrect ? "Correct!" : "Incorrect!"}
            </h3>
            <p className="mb-4">Your answer: {popupContent.answer}</p>
            <p className="mb-4">
              Correct answer: {popupContent.correctAnswer}
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleClosePopup}
              className="w-full py-3 bg-blue-600 text-white rounded-lg"
            >
              Close
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
