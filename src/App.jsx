import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";

function App() {
  return (
    <div className="font-ubuntu">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
