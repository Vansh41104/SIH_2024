import React, { useState } from "react";
import './TestPages.css';  // Link to the CSS file

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Sample questions with options
  const questions = [
    {
      id: 1,
      question: "Some Random Question That is Relate to the Course",
      options: [
        { id: 1, text: "Option 1", isCorrect: false },
        { id: 2, text: "Option 2", isCorrect: true },
        { id: 3, text: "Option 3", isCorrect: false },
        { id: 4, text: "Option 4", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "Another Random Question Related to the Course",
      options: [
        { id: 1, text: "Option 1", isCorrect: false },
        { id: 2, text: "Option 2", isCorrect: true },
        { id: 3, text: "Option 3", isCorrect: false },
        { id: 4, text: "Option 4", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Another Random Question Related to the Course",
      options: [
        { id: 1, text: "Option 1", isCorrect: false },
        { id: 2, text: "Option 2", isCorrect: true },
        { id: 3, text: "Option 3", isCorrect: false },
        { id: 4, text: "Option 4", isCorrect: false },
      ],
    },
    {
      id:4,
      question: "Another Random Question Related to the Course",
      options: [
        { id: 1, text: "Option 1", isCorrect: false },
        { id: 2, text: "Option 2", isCorrect: true },
        { id: 3, text: "Option 3", isCorrect: false },
        { id: 4, text: "Option 4", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "Another Random Question Related to the Course",
      options: [
        { id: 1, text: "Option 1", isCorrect: false },
        { id: 2, text: "Option 2", isCorrect: true },
        { id: 3, text: "Option 3", isCorrect: false },
        { id: 4, text: "Option 4", isCorrect: false },
      ],
    },
    // Add more questions as needed
  ];

  const handleOptionClick = (questionId, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId, // Store the selected option for each question
    });
  };

  const handleSubmitTest = () => {
    setIsTestSubmitted(true);
    
    // Calculate score
    let calculatedScore = 0;
    questions.forEach((question) => {
      const selectedOptionId = selectedAnswers[question.id];
      const selectedOption = question.options.find(option => option.id === selectedOptionId);
      if (selectedOption && selectedOption.isCorrect) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  return (
    <div className="quiz-app">
      {/* Side navigation for direct access to questions */}
      <div className="side-nav">
        <div className="side-nav-heading"><h1>Industry Chemical 101 Test 1</h1></div>
        <div className="side-nav-buttons">{questions.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${index === currentQuestionIndex ? 'active' : ''}`}
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}
          </button>
        ))}
        </div>
      </div>

      <div className="quiz-container">
        {!isTestSubmitted ? (
          <>
            {/* Display the current question */}
            <div className="question"><h2>{questions[currentQuestionIndex].question}</h2></div>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option) => (
                <label key={option.id}>
                  <input
                    type="radio"
                    name={`question-${questions[currentQuestionIndex].id}`}
                    value={option.id}
                    checked={selectedAnswers[questions[currentQuestionIndex].id] === option.id}
                    onChange={() =>
                      handleOptionClick(questions[currentQuestionIndex].id, option.id)
                    }
                  />
                  {option.text}
                </label>
              ))}
            </div>

            {/* Previous Button */}
            <button
              className="prev-button"
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0} // Disable if it's the first question
            >
              Previous
            </button>

            {/* Next Button or Submit Test */}
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                className="next-button"
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                // disabled={!selectedAnswers[questions[currentQuestionIndex].id]} // Disable next if no option selected
              >
                Next
              </button>
            ) : (
              // Submit button for the last question
              <button
                className="next-button"
                onClick={handleSubmitTest}
                disabled={Object.keys(selectedAnswers).length !== questions.length} // Only allow submit if all questions are answered
              >
                Submit Test
              </button>
            )}
          </>
        ) : (
          // Display feedback after submission
          <div className="feedback-container">
            <h2>Test Completed</h2>
            <p>Your Score: {score} / {questions.length}</p>
            <ul>
              {questions.map((question, index) => {
                const selectedOptionId = selectedAnswers[question.id];
                const selectedOption = question.options.find(option => option.id === selectedOptionId);
                const isCorrect = selectedOption?.isCorrect;

                return (
                  <li key={index}>
                    <strong>Q{index + 1}: {question.question}</strong>
                    <p>Your Answer: {selectedOption?.text} - {isCorrect ? 'Correct' : 'Incorrect'}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
