import { useState } from "react";
import "./Register.css";
import React from "react";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="register">
      <input
        onChange={changeHandler}
        name="name"
        value={user.name}
        type="text"
        placeholder="Enter your Name"
      ></input>
      <input
        onChange={changeHandler}
        name="email"
        value={user.email}
        type="text"
        placeholder="Enter your Email"
      ></input>
      <input
        onChange={changeHandler}
        name="password"
        value={user.password}
        type="password"
        placeholder="Enter your Password"
      ></input>
      <input
        onChange={changeHandler}
        name="reEnterPassword"
        value={user.reEnterPassword}
        type="password"
        placeholder="Re-enter your Password"
      ></input>
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
}

export default Register;
