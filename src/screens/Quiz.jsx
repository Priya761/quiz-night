import React, { useState } from "react";
import Nav from "../components/Nav";
import quizes from "../assets/quizes.json";
import QuizResults from "../components/QuizResults";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0); // CURRENT INDEX OF QUESTION

  const [isQRvis, setIsQRvis] = useState(false); // TO SHOW RESULTS BOOLEAN

  const [currentAnsIndex, setCurrentAnsIndex] = useState(0); // NOT USED

  const quiz = quizes[0]; // STORING 1st QUESTIONER

  // STORING ANSWERS
  const [userAns, setUserAns] = useState(
    Array(quiz.questions.length).fill(null)
  );

  function handleNext() {
    if (currentIndex < quiz.questions[0].answers.length - 1)
      setCurrentIndex(currentIndex + 1);
  }

  function handlePrev() {
    if (currentIndex !== 0) setCurrentIndex(currentIndex - 1);
  }

  // CODE TO SUBMIT QUIZ
  function handleSubmit(e) {
    e.preventDefault();
  }

  // CODE TO STORE ANSWER
  function addAnswer(e, i) {
    e.preventDefault();

    const updatedUserAns = [...userAns];
    updatedUserAns[currentIndex] = i;
    setUserAns(updatedUserAns);
    setCurrentAnsIndex(i);
  }

  console.log("userAns:", userAns);

  // DYNAMIC CHANGING ANSWER'S BORDER // NOT USED TILL NOW
  const isAns =
    "m-2 w-32 border-4 border-green-700 rounded-lg flex justify-center items-center";
  const isNotAns =
    "m-2 w-32 border-2 border-gray-700 rounded-lg flex justify-center items-center";

  return (
    <>
      <Nav />
      <div className="px-8 py-5">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <p>{quiz.quesionerId}</p>
          <p>Time: 00:00</p>
        </div>
        {/* MAIN CONTENT */}
        <div className="flex flex-col justify-center items-center mt-28">
          {/* QUESTION */}
          <div>
            <p className="text-xl font-bold">
              {quiz.questions[currentIndex].question}
            </p>
          </div>
          {/* OPTIONS */}
          <div className="my-5 flex flex-col justify-center items-center">
            {quiz.questions[currentIndex].answers.map((ans, i) => {
              return (
                <button
                  key={i}
                  className={isNotAns}
                  onClick={(e) => {
                    addAnswer(e, i);
                  }}
                >
                  {ans}
                </button>
              );
            })}
          </div>
          {/* PREVIOS, NEXT & SUBMIT BUTTON */}
          <div className="flex justify-between items-center w-96">
            {/* PREVIOUS */}
            <button
              className="bg-blue-500 px-3 py-1 rounded-md cursor-pointer text-white font-bold hover:shadow-black hover:shadow-md"
              onClick={handlePrev}
            >
              Previous
            </button>
            <div>
              {currentIndex === quiz.questions[0].answers.length - 1 ? (
                // SUBMIT
                <button
                  type="submit"
                  className="bg-blue-500 px-3 py-1 rounded-md cursor-pointer text-white font-bold hover:shadow-black hover:shadow-md"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Submit
                </button>
              ) : (
                // NEXT
                <button
                  className="bg-blue-500 px-3 py-1 rounded-md cursor-pointer text-white font-bold hover:shadow-black hover:shadow-md"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
          </div>
          {/* TEST BUTTON TO SHOW RESULT */}
          <button
            onClick={() => {
              setIsQRvis(true);
            }}
          >
            show result
          </button>
        </div>
      </div>
      {isQRvis ? <QuizResults setIsQRvis={setIsQRvis} /> : ""}
    </>
  );
}

export default Quiz;
