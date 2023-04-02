import React from "react";

function Card({ quiz }) {
  console.log(quiz);
  return (
    <>
      <div className="m-2 border border-slate-800 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer shadow-blue-300 shadow-md">
        {/* Header */}
        <div className="px-2 pt-1">
          <p className="italic text-xs ml-2">id: {quiz.quesionerId}</p>
        </div>
        <div className="px-2 pb-1 border-b border-slate-800">
          <p className="font-semibold">{quiz.questionerName}</p>
        </div>
        {/* Question Example */}
        <div className="px-3 py-2">
          <p className="text-sm text-gray-600 italic truncate">
            {quiz.questions[0].question}
          </p>
          <p className="text-sm text-gray-600 italic truncate">
            {quiz.questions[1].question}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
