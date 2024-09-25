import { useState } from "react";
import {
  FcHighPriority,
  FcMediumPriority,
  FcLowPriority,
} from "react-icons/fc";

export default function Priority({ priority, setPriority }) {
  const handleClick = (priorityLevel) => {
    if (priority === priorityLevel) return setPriority("default");
    setPriority(priorityLevel);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <span className="font-semibold tracking-wide">
        Choose the priority level:
      </span>
      <div className="flex justify-between gap-2">
        <div
          className="w-full text-center p-5 shadow-md flex flex-col items-center gap-2 cursor-pointer border border-transparent hover:border-white"
          onClick={() => handleClick("low")}
          style={{ border: priority === "low" ? "1px solid white" : "" }}
          data-cy="todo-low-priority"
        >
          <FcLowPriority style={{ fontSize: "2.5rem" }} />
          <span className="text-sm font-normal tracking-wide">Low</span>
        </div>
        <div
          className="w-full text-center p-5 shadow-md flex flex-col items-center gap-2 cursor-pointer border border-transparent hover:border-white"
          onClick={() => handleClick("medium")}
          style={{ border: priority === "medium" ? "1px solid white" : "" }}
        >
          <FcMediumPriority style={{ fontSize: "2.5rem" }} />
          <span className="text-sm font-normal tracking-wide">Medium</span>
        </div>
        <div
          className="w-full text-center p-5 shadow-md flex flex-col items-center gap-2 cursor-pointer border border-transparent hover:border-white"
          onClick={() => handleClick("high")}
          style={{ border: priority === "high" ? "1px solid white" : "" }}
        >
          <FcHighPriority style={{ fontSize: "2.5rem" }} />
          <span className="text-sm font-normal tracking-wide">High</span>
        </div>
      </div>
    </div>
  );
}
