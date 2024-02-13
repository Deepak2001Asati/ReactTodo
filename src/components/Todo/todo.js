import React from "react";
import { useState } from "react";
import axios from "axios";
import "./todo.css";

const Todo = ({}) => {
  const [tododata, setUser] = useState({
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...tododata, // ...-spread operator
      [name]: value,
    });
  };

  const todo = () => {
    //const { name, email, password, reEnterPassword } = user;
    axios.post("http://localhost:9004/todo", tododata).then((res) => {
      if (res.data === "save") {
        alert("successfully saved");
      } else {
        alert("..........");
      }
    });
  };

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        value={tododata.text}
        placeholder="Add new item"
        onChange={handleChange}
      />
      <div className="button" onClick={() => todo()}>
        Add
      </div>
    </div>
  );
};

export default Todo;
