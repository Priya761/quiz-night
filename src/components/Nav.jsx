import React from "react";
import quizNightLogo from "../assets/quizNightLogo.png";

function Nav() {
  return (
    <>
      <div className="bg-blue-200 flex items-center px-5 py-2 rounded-b-md border-b border-slate-800 sticky shadow-md">
        <div className="flex items-center gap-2 grow">
          <img width={50} src={quizNightLogo} />
          <h4 className="text-2xl font-bold text-slate-900">Quiz Night</h4>
        </div>
        <div className="bg-slate-600 hover:bg-slate-100 transition-all duration-300 p-2 rounded-lg text-white hover:text-slate-900 font-bold shadow-md cursor-pointer">
          About Us
        </div>
      </div>
    </>
  );
}

export default Nav;
