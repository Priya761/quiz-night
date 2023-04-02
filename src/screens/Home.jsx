import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import quizes from "../assets/quizes";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Nav />
      <div className=" md:grid grid-cols-3 lg:grid-cols-5 px-8 py-5">
        {quizes.map((quiz, i) => {
          return (
            <Link to="quiz">
              <Card key={i} quiz={quiz} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
