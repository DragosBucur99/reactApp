import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import dayjs from "dayjs";
import Calendar from "./Calendar";
import { v4 as uuid } from "uuid";
import { FcCancel } from "react-icons/fc";

export default function Form({ click, todos, setTodos, setClick }) {
  const [currentDay, setCurrentDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [calendarState, setCalendarState] = useState(true);
  const titleRef = useRef();
  const unique_id = uuid();

  const tl = useRef();
  const ref = useRef();

  const handleCalendarState = () => {
    setCalendarState(!calendarState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const todo = {
      day: currentDay,
      month: currentMonth,
      title: titleRef.current.value,
      id: unique_id.slice(0, 8),
      active: true,
    };
    setTodos([todo, ...todos]);
    setClick(!click);
    titleRef.current.value = "";
  };

  useEffect(() => {
    setCalendarState(!calendarState);
  }, [currentDay]);

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
    <div
      // className={click ? "block" : "hidden"}
      style={{ height: "100%", display: "none", opacity: "0%" }}
      ref={ref}
    >
      <form
        className="flex flex-col h-full justify-between py-5"
        onSubmit={handleFormSubmit}
      >
        <div className="absolute left-0 top-0 bottom-0">
          <Calendar
            setCurrentDay={setCurrentDay}
            setCurrentMonth={setCurrentMonth}
            calendarState={calendarState}
          />
        </div>
        <div className="w-full">
          <label>Pick a due date (optional)</label>
          <input
            type="text"
            readOnly
            onClick={handleCalendarState}
            className="cursor-pointer w-full"
            placeholder={
              currentDay
                ? currentDay + "-" + currentMonth + "-" + dayjs().year()
                : ""
            }
          ></input>
        </div>
        <div className="w-ful">
          <label>Title</label>
          <input type="text" className="w-full" ref={titleRef}></input>
        </div>
        <div className="w-full flex flex-col gap-2">
          <button
            type="submit"
            className="text-white font-semibold w-full rounded-xl p-2 bg-indigo-700 tracking-wide hover:bg-indigo-800"
          >
            Create to-do
          </button>
          <div
            className="font-semibold text-gray-500 text-sm w-full flex justify-center items-center gap-1 cursor-pointer hover:text-white"
            onClick={() => setClick(!click)}
          >
            <span>...or CANCEL </span>
            <FcCancel />
          </div>
        </div>
      </form>
    </div>
  );
}
