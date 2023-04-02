import React from "react";

function QuizResults({ setIsQRvis }) {
  return (
    <>
      <div className="absolute top-0 w-screen h-screen bg-black/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-96 z-50 rounded-md border border-slate-700 flex flex-col shadow-slate-300 transition-all duration-300 shadow-2xl hover:scale-105">
        <div>
          {/* HEADER */}
          <div className="px-3 py-2 border-b border-slate-700 flex justify-between">
            <p className="font-bold">Quiz Results</p>
            <button
              className="rounded-full border hover:border-2 border-black w-5 h-5 flex justify-center items-center cursor-pointer hover:font-bold"
              onClick={() => {
                // TO HIDE RESULTS
                setIsQRvis(false);
              }}
            >
              &times;
            </button>
          </div>
          {/* CONTENT */}
          <div className="px-3 py-16 flex flex-col justify-center items-center">
            <p className="flex justify-center items-center gap-2 text-base font-semibold">
              Correct Answers:
              <span className="text-3xl font-bold text-green-500">3</span>
            </p>
            <p className="flex justify-center items-center gap-2 text-base font-semibold">
              Wrong Answers:
              <span className="text-3xl font-bold text-red-500">1</span>
            </p>
          </div>
          {/* FOOTER */}
          <div className="px-3 py-2 border-t border-slate-700 flex justify-end">
            <p className="font-bold">Time Taken: 00:00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizResults;
