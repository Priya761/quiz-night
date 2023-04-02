import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import quizes from "../assets/quizes"

function Home() {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-5 px-8 py-5">
        {/* <Card /> */}
        {quizes.map((quiz, i)=>{
            return <Card 
                key={i}
                quiz={quiz}
            />
        })}
      </div>
    </div>
  );
}

export default Home;
