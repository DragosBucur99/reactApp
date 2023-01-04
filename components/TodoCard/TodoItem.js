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
  // const [todoState, setTodoState] = useState(false);

  let priorityStyle;

  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleActive = () => {
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
          ? "flex py-3 px-4 shadow-md rounded-md items-center justify-between"
          : "flex py-3 px-4 shadow-md rounded-md items-center justify-between opacity-50"
      }
      style={{
        borderLeft: priority === "default" ? "" : priorityStyle,
      }}
    >
      <div className="flex justify-center items-center pr-5 flex-1">
        <RiCheckboxBlankCircleLine
          className={active ? "block" : "hidden"}
          onClick={handleActive}
          style={{ cursor: "pointer", transform: "scale(1.2)" }}
        />
        <RiCheckboxCircleLine
          className={active ? "hidden" : "block"}
          onClick={handleActive}
          style={{ cursor: "pointer", transform: "scale(1.2)" }}
        />
      </div>
      <div className="" style={{ wordWrap: "break-word", width: "60%" }}>
        <h1 className={active ? "" : "line-through"}>{title}</h1>
        <span className="opacity-50 text-sm">{date}</span>
      </div>
      <div style={{ transform: "scale(1.2)" }} className="pl-5 flex-1">
        <BsTrash onClick={deleteTodo} className="cursor-pointer mx-auto" />
      </div>
    </div>
  );
}
