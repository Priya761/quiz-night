import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-5 px-8 py-5">
        <Card />
      </div>
    </div>
  );
}

export default Home;
