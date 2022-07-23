import "./Login.css";
import { useState } from "react";
import React from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="login">
      <input
        name="email"
        value={user.email}
        type="text"
        placeholder="Enter your Email"
        onChange={changeHandler}
      ></input>
      <input
        name="password"
        value={user.password}
        type="password"
        placeholder="Enter your Password"
        onChange={changeHandler}
      ></input>
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
}

export default Login;
