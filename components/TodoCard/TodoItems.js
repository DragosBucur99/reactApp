import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoItems({ todos, setTodos, click }) {
  return (
    <div
      className="flex-col gap-5 w-full"
      style={{ display: click ? "none" : "flex" }}
    >
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem
            title={todo.title}
            month={todo.month}
            day={todo.day}
            id={todo.id}
            setTodos={setTodos}
            todos={todos}
          />
        </div>
      ))}
    </div>
  );
}
