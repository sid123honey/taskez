import React from "react";
import "./HomePage.css";
import Todo from "./Todo";
import InProgress from "./Inprogress";
import Completed from "./Completed";

function HomePage() {
  return (
    <div>
      {" "}
      <h1>Projects</h1>
      <div className="listComponent">
        <Todo></Todo>
        <InProgress></InProgress>
        <Completed></Completed>
      </div>
    </div>
  );
}

export default HomePage;
