import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, // ...-spread operator
      [name]: value,
    });
    //console.log(name, value);
  };
  const register = () => {
    //const { name, email, password, reEnterPassword } = user;
    axios.post("http://localhost:9004/register", user).then((res) => {
      alert(res.data.message);
      navigate("/login");
    });
  };

  return (
    <div className="register">
      {/* {console.log("User", user)} --- is shows the name value whithout changing other input      */}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter your password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={() => register()}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
};
export default Register;
