import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todos, setTodos }) => {
  return todos.map((todo) => {
    const deleteHandler = () => {
      setTodos(todos.filter((e) => e.id !== todo.id));
    };
    const completeHandler = () => {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        })
      );
    };
    return (
      <li key={todo.id} className={` ${todo.completed ? "completed" : ""}  `}>
        {todo.text}
        <button onClick={deleteHandler}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button onClick={completeHandler}>
          {todo.completed && <FontAwesomeIcon icon={faCheckDouble} />}
          {!todo.completed && <FontAwesomeIcon icon={faCheck} />}
        </button>
      </li>
    );
  });
};
