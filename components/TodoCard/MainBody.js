import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Form from "./Form";
import TodoItems from "./TodoItems";

export default function MainBody({ click, setClick, todos, setTodos }) {
  const tl = useRef();
  const ref = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(ref.current, {
      opacity: 0,
      display: "none",
      duration: 0.2,
      ease: "ease.out",
    });
  }, []);

  useEffect(() => {
    click ? tl.current.play() : tl.current.reverse();
  }, [click]);

  return (
    <div className="relative flex flex-col w-full h-full overflow-y-auto p-5">
      <div ref={ref} className="flex flex-col w-full">
        <p
          className="font-bold text-lg text-red-400 text-center mx-auto"
          style={{ display: todos.length > 0 ? "none" : "inline" }}
        >
          It looks like your to-do list is empty!
        </p>
      </div>
      <Form
        click={click}
        setTodos={setTodos}
        todos={todos}
        setClick={setClick}
      />
      <TodoItems todos={todos} setTodos={setTodos} click={click} />
    </div>
  );
}
