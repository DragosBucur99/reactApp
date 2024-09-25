import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "./Header";
import MainBody from "./MainBody";

export default function TodoCard(props) {
  const [click, setClick] = useState(false);
  const [todos, setTodos] = useState([]);
  const expendUp = useRef();
  const tl = useRef();

  function handleClick() {
    setClick(!click);
  }

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(
      expendUp.current,
      {
        top: "0%",
        duration: 0.2,
        ease: "ease.in.out",
      },
      "+=0.2"
    );
  }, []);

  useEffect(() => {
    click ? tl.current.play() : tl.current.reverse();
  }, [click]);

  return (
    <div
      className="relative snap-start snap-always shrink-0 w-full rounded-lg h-full p-5 lg:shadow-md lg:h-full lg:flex-1"
      style={{ backgroundColor: props.color }}
    >
      {/* Start */}
      <div
        className="flex flex-col rounded-xl bg-indigo-500"
        style={{ height: "100%" }}
      >
        {/* Header */}
        <Header todos={todos} />
        {/* Main body */}
        <div
          className="relative flex-1 bg-indigo-700 flex flex-col overflow-hidden"
          style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}
        >
          <button
            className="h-16 font-bold tracking-wider"
            onClick={handleClick}
            data-cy="todo-cta-button"
          >
            CREATE TASK
          </button>
          <div
            ref={expendUp}
            className="absolute bg-indigo-600 top-16 left-0 bottom-0 w-full shadow py-5"
            style={{
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
            }}
          >
            <MainBody
              click={click}
              setClick={setClick}
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

TodoCard.defaultProps = {
  color: "#1d1d1d",
};
