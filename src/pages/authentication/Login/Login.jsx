import React from "react";
import "./login.css";
import http from "../../../httpService";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    http.post("auth/login", user);
  };

  return (
    <div className="LoginContainer">
      <div className="LoginWrapper">
        <span className="LoginSpan">Login</span>
        <div className="LoginItems">
          <form action="" className="LoginForm">
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={user.username}
              placeholder="Email"
              className="LoginInput"
            />
            <input
              type="text"
              name="password"
              onChange={handleChange}
              value={user.password}
              placeholder="Password"
              className="LoginInput"
            />
            <button onClick={handleSubmit} className="LoginButton">
              Login
            </button>
          </form>
          <p>Don't you have an account? Register</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
