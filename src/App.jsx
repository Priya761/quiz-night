import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";

function App() {
  return (
    <div className="font-ubuntu">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
