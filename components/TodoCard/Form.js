import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Priority from "./Priority";
import WordCounter from "./WordCounter";
import { v4 as uuid } from "uuid";
import { FcCancel } from "react-icons/fc";
import DueDateInput from "./DueDateInput";

export default function Form({ click, todos, setTodos, setClick }) {
  const [priority, setPriority] = useState("default");
  const [wordCounter, setWordCounter] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [hasError, setHasError] = useState(false);
  const [resetDateInput, setResetDateInput] = useState(false);
  const titleRef = useRef();
  const unique_id = uuid();

  const tl = useRef();
  const ref = useRef();

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleErrorChange = (errorStatus) => {
    setHasError(errorStatus);
  };

  const handleCancelButton = () => {
    setClick(!click);
    setResetDateInput(true);
    titleRef.current.value = "";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const todo = {
      date: selectedDate,
      title: titleRef.current.value,
      id: unique_id.slice(0, 8),
      priority: priority,
      active: true,
    };
    setTodos([todo, ...todos]);
    setClick(!click);
    setResetDateInput(true);
    setPriority("default");
    setWordCounter(0);
    titleRef.current.value = "";
  };

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(ref.current, {
      opacity: "100%",
      display: "block",
      duration: 0.1,
      ease: "ease.out",
    });
  }, []);

  useEffect(() => {
    click ? tl.current.play() : tl.current.reverse();
  }, [click]);

  return (
    <div style={{ height: "100%", display: "none", opacity: "0%" }} ref={ref}>
      <form
        className="flex flex-col h-full justify-between"
        onSubmit={handleFormSubmit}
      >
        <div className="w-full">
          <div className="flex">
            <DueDateInput
              onDateChange={handleDateChange}
              onErrorChange={handleErrorChange}
              reset={resetDateInput}
            />
          </div>
        </div>
        <div className="w-full flex">
          <input
            type="text"
            className="w-full"
            ref={titleRef}
            onChange={() => setWordCounter(titleRef.current.value.length)}
            placeholder="What are you planning?"
            maxlength="30"
            required
            data-cy="todo-input"
          ></input>
          <WordCounter wordCounter={wordCounter} />
        </div>
        <Priority priority={priority} setPriority={setPriority} />
        <div className="w-full flex flex-col gap-2">
          <button
            type="submit"
            disabled={hasError}
            className={`text-white font-semibold w-full rounded-xl p-2 tracking-wide ${
              hasError
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-700 hover:bg-indigo-800"
            }`}
            data-cy="todo-create"
          >
            Create to-do
          </button>
          <div
            className="font-semibold text-gray-200 text-sm w-full flex justify-center items-center gap-1 cursor-pointer hover:text-white"
            onClick={handleCancelButton}
          >
            <span className="tracking-wide">...or CANCEL </span>
            <FcCancel />
          </div>
        </div>
      </form>
    </div>
  );
}
