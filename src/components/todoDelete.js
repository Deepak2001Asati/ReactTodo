import React from "react";
import { useState } from "react";
import axios from "axios";
import "./todoDelete.css";

const TodoDelete = ({}) => {
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
    axios.post("http://localhost:9004/todoDelete", tododata).then((res) => {
      alert(res.data);
    });
  };

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        value={tododata.text}
        placeholder="enter todo"
        onChange={handleChange}
      />
      <div className="button" onClick={() => todo()}>
        delete
      </div>
    </div>
  );
};
export default TodoDelete;
