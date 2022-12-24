import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function Food({
  calories,
  proteins,
  carbs,
  name,
  foods,
  setFoods,
  id,
  amount,
  expanded,
}) {
  const deleteFood = () => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  const handleExpand = () => {
    setFoods(
      foods.map((food) => {
        if (food.id === id) {
          return { ...food, expanded: !food.expanded };
        } else {
          return food;
        }
      })
    );
  };

  return (
    <div
      className="p-3 flex flex-col gap-3 bg-indigo-600 rounded-md shadow-md"
      onClick={handleExpand}
    >
      <div className="flex w-full justify-between">
        <div className="flex gap-1 items-center">
          <div className="flex items-center gap-1">
            <span className="w-5 flex items-center justify-center">
              <AiOutlineArrowDown style={{ display: expanded ? "none" : "" }} />
              <AiOutlineArrowUp style={{ display: expanded ? "" : "none" }} />
            </span>
            <span className="text-lg tracking-wide font-semibold">{name}</span>
          </div>
          <span className="text-xs opacity-50 font-semibold">{amount}g</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="bg-indigo-700 px-2 rounded-md">Calories:</span>
          <span className="tracking-wide text-md font-semibold">
            {Math.round((amount * calories) / 100)}
          </span>
        </div>
      </div>
      <div
        className="relative flex-col gap-1 text-sm font-semibold"
        style={{ display: expanded ? "flex" : "none" }}
      >
        <span className="text-slate-100">
          Proteins: {Math.round((amount * proteins) / 100)}g
        </span>
        <span>Carbs: {Math.round((amount * carbs) / 100)}g</span>
      </div>
    </div>
  );
}
