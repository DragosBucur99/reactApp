import dayjs from "dayjs";
import { useState } from "react";

export default function Header({ todos }) {
  const hour = dayjs().hour();
  console.log(hour);
  let greeting;
  if (hour >= 3 && hour < 12) {
    greeting = "Good Morning! 🌅";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon! ☀️";
  } else if (hour >= 17) {
    greeting = "Good Evening! 🌔";
  } else {
    greeting = "Hello! 👋";
  }
  return (
    <div className="flex flex-col gap-3 p-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-md font-semibold tracking-wide">{greeting}</h1>
      </div>
      <p className="uppercase font-semibold text-indigo-100 opacity-70">
        remaining tasks: {todos.filter((todo) => todo.active == true).length}
      </p>
    </div>
  );
}
