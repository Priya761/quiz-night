import React, { useState } from "react";
import Nav from "../components/Nav";
import quizes from "../assets/quizes.json";
import QuizResults from "../components/QuizResults";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isQRvis, setIsQRvis] = useState(false);

  const [currentAnsIndex, setCurrentAnsIndex] = useState(0);

  const quiz = quizes[0];

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

  function handleSubmit(e) {
    e.preventDefault();
  }

  function addAnswer(e, i) {
    e.preventDefault();

    const updatedUserAns = [...userAns];
    updatedUserAns[currentIndex] = i;
    setUserAns(updatedUserAns);
    setCurrentAnsIndex(i);
  }

  console.log(userAns);

  const isAns =
    "m-2 w-32 border-4 border-green-700 rounded-lg flex justify-center items-center";
  const isNotAns =
    "m-2 w-32 border-2 border-gray-700 rounded-lg flex justify-center items-center";

  return (
    <>
      <Nav />
      <div className="px-8 py-5">
        <div className="flex justify-between items-center">
          <p>{quiz.quesionerId}</p>
          <p>Time: 00:00</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-28">
          <div>
            <p className="text-xl font-bold">
              {quiz.questions[currentIndex].question}
            </p>
          </div>
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
          <div className="flex justify-between items-center w-96">
            <button
              className="bg-blue-500 px-3 py-1 rounded-md cursor-pointer text-white font-bold hover:shadow-black hover:shadow-md"
              onClick={handlePrev}
            >
              Previous
            </button>
            <div>
              {currentIndex === quiz.questions[0].answers.length - 1 ? (
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
                <button
                  className="bg-blue-500 px-3 py-1 rounded-md cursor-pointer text-white font-bold hover:shadow-black hover:shadow-md"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
          </div>
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
