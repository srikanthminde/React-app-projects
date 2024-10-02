import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

function Todolist() {
  const todos = useSelector((state) => state.todoRed.todos);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState('');
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(newTodo));
        }}
      >
        Add todo
      </button>
      <ul>
        {todos.map((l) => {
          return <li>{l}</li>;
        })}
      </ul>
    </div>
  );
}
export default Todolist;
