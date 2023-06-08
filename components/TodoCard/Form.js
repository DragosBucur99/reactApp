import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import dayjs from "dayjs";
import Calendar from "./Calendar";
import Priority from "./Priority";
import WordCounter from "./WordCounter";
import ResetCalendar from "./ResetCalendar";
import { v4 as uuid } from "uuid";
import { FcCancel } from "react-icons/fc";

export default function Form({ click, todos, setTodos, setClick }) {
  const [currentDay, setCurrentDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [calendarState, setCalendarState] = useState(true);
  const [priority, setPriority] = useState("default");
  const [wordCounter, setWordCounter] = useState(0);
  const titleRef = useRef();
  const dateRef = useRef();
  const unique_id = uuid();

  const tl = useRef();
  const ref = useRef();

  const handleCalendarState = () => {
    setCalendarState(!calendarState);
  };

  const handleCancelButton = () => {
    setClick(!click);
    setCurrentDay("");
    setCurrentMonth("");
    titleRef.current.value = "";
    dateRef.current.value = "";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const todo = {
      day: currentDay,
      month: currentMonth,
      date: dateRef.current.value,
      title: titleRef.current.value,
      id: unique_id.slice(0, 8),
      priority: priority,
      active: true,
    };
    setTodos([todo, ...todos]);
    setClick(!click);
    setCurrentDay("");
    setCurrentMonth("");
    setPriority("default");
    setWordCounter(0);
    titleRef.current.value = "";
    dateRef.current.value = "";
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
        <div className="absolute left-0 top-0 bottom-0 z-10">
          <Calendar
            setCurrentDay={setCurrentDay}
            setCurrentMonth={setCurrentMonth}
            calendarState={calendarState}
            setCalendarState={setCalendarState}
          />
        </div>
        <div className="w-full">
          <div className="flex">
            <input
              type="text"
              ref={dateRef}
              readOnly
              onClick={handleCalendarState}
              className="cursor-pointer w-full"
              placeholder="Pick a due date (optional)"
              value={
                currentDay
                  ? currentDay + "-" + currentMonth + "-" + dayjs().year()
                  : ""
              }
            ></input>
            <ResetCalendar
              currentDay={currentDay}
              setCurrentDay={setCurrentDay}
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
          ></input>
          <WordCounter wordCounter={wordCounter} />
        </div>
        <Priority priority={priority} setPriority={setPriority} />
        <div className="w-full flex flex-col gap-2">
          <button
            type="submit"
            className="text-white font-semibold w-full rounded-xl p-2 bg-indigo-700 tracking-wide hover:bg-indigo-800"
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
