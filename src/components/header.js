import React from "react";
import "./header.css"; // Import the CSS file for styling
import ShowTodo from "./showTodo";
import Todo from "./Todo/todo";
import TodoDelete from "./todoDelete";

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="part part1">
          <h3>TO-DO-LIST</h3> <Todo />
        </div>
      </div>
      <div className="row">
        <div className="part part2">
          <h1>Data from MongoDB</h1> <ShowTodo />
        </div>
      </div>
      <div className="row">
        <div className="part part3">
          <h1> Delete Todo </h1>
          <TodoDelete />
        </div>
      </div>
    </div>
  );
};

export default Header;
