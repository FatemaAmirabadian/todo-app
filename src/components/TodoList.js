import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({inputText ,setInputText ,todos ,setTodos}) => {
  return (
    <div>
      <ul>
        <Todo todos={todos} setTodos={setTodos}/>
      </ul>
    </div>
  );
};
