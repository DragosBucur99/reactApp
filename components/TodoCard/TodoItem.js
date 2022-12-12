import { useState, useEffect } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

import { BsTrash } from "react-icons/bs";

export default function TodoItem({
  title,
  date,
  id,
  active,
  priority,
  setTodos,
  todos,
}) {
  const [todoState, setTodoState] = useState(false);

  let priorityStyle;

  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleActive = () => {
    setTodoState(!todoState);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, active: !todo.active };
        } else {
          return todo;
        }
      })
    );
  };

  const priorityStyles = {
    lowPriority: "10px solid green",
    mediumPriority: "10px solid yellow",
    highPriority: "10px solid red",
  };

  if (priority === "low") {
    priorityStyle = priorityStyles.lowPriority;
  } else if (priority === "medium") {
    priorityStyle = priorityStyles.mediumPriority;
  } else {
    priorityStyle = priorityStyles.highPriority;
  }

  return (
    <div
      className={
        active
          ? "flex py-3 px-2 shadow-md rounded-md items-center justify-around"
          : "flex py-3 px-2 shadow-md rounded-md items-center justify-around opacity-50"
      }
      style={{
        borderLeft: priority === "default" ? "" : priorityStyle,
      }}
    >
      <div className="flex justify-center items-center">
        <RiCheckboxBlankCircleLine
          className={todoState ? "hidden" : "block"}
          onClick={handleActive}
          style={{ cursor: "pointer", transform: "scale(1.3)" }}
        />
        <RiCheckboxCircleLine
          className={todoState ? "block" : "hidden"}
          onClick={handleActive}
          style={{ cursor: "pointer", transform: "scale(1.3)" }}
        />
      </div>
      <div className="w-1/2" style={{ wordWrap: "break-word" }}>
        <h1
          className={
            todos.find((todo) => todo.id === id).active ? "" : "line-through"
          }
        >
          {title}
        </h1>
        <span className="opacity-50 text-sm">{date}</span>
      </div>
      <div style={{ transform: "scale(1.3)" }}>
        <BsTrash onClick={deleteTodo} className="cursor-pointer mx-auto" />
      </div>
    </div>
  );
}
