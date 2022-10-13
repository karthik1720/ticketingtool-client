import React, { useState } from "react";
import { useEffect } from "react";
import "./register.css";
import http from "../../../httpService";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
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
    http.post("auth/register", user);
  };

  return (
    <div className="RegisterContainer">
      <div className="RegWrapper">
        <span className="RegSpan">Register</span>
        <div className="RegItems">
          <form action="" className="RegForm">
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={user.username}
              placeholder="Username"
              className="RegInput"
            />
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={user.email}
              placeholder="Email"
              className="RegInput"
            />
            <input
              type="text"
              name="password"
              onChange={handleChange}
              value={user.password}
              placeholder="Password"
              className="RegInput"
            />
            <button onClick={handleSubmit} className="RegButton">
              Register
            </button>
          </form>
          <p>Do you have an account? Login</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
