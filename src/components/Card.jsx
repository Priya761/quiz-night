import React from "react";

function Card() {
  return (
    <>
      <div className="border border-slate-800 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer shadow-blue-300 shadow-md">
        <div className="px-2 pt-1">
          <p className="italic text-xs ml-2">id: 1</p>
        </div>
        <div className="px-2 pb-1 border-b border-slate-800">
          <p className="font-semibold">Questioner's Name</p>
        </div>
        <div className="px-3 py-2">
          <p className="text-sm text-gray-600 italic truncate">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="text-sm text-gray-600 italic truncate">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
