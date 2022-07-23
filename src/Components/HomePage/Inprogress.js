import React, { useState } from "react";
import "./Inprogress.css";

function InProgress() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}+${Date.now()}`, todo }, ...todos]);
    }
  };
  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="container">
      <h1>In Progress</h1>
      <form className="todoform" onSubmit={submitHandler}>
        <input className="input" onChange={inputHandler} type="text"></input>
        <button type="submit" className="button">
          Go
        </button>
      </form>
      <ul className="allTodos">
        {todos.map((t) => {
          return (
            <li className="singleTodo" key={t.id}>
              <span className="todoText">{t.todo}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InProgress;
