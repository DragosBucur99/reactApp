import { useState } from "react";
import SmallNutrientsCard from "./SmallNutrientsCard";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function Food({
  calories,
  proteins,
  carbs,
  fat,
  name,
  foods,
  setFoods,
  id,
  amount,
  expanded,
  deleteState,
  deleteStatus,
}) {
  const deleteFood = () => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  const handleClick = () => {
    if (deleteState) {
      setFoods(
        foods.map((food) => {
          if (food.id === id) {
            return { ...food, deleteStatus: !food.deleteStatus };
          } else {
            return food;
          }
        })
      );
    } else {
      setFoods(
        foods.map((food) => {
          if (food.id === id) {
            return { ...food, expanded: !food.expanded };
          } else {
            return food;
          }
        })
      );
    }
  };

  return (
    <div
      className="p-3 flex flex-col gap-3 bg-indigo-600 rounded-md shadow-md"
      onClick={handleClick}
      style={{ border: deleteStatus ? "1px solid red" : "none" }}
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
        <div className="flex gap-1 items-center bg-indigo-700 px-2 rounded-md">
          <span className="tracking-wide text-md font-semibold">
            {Math.round((amount * calories) / 100)}
          </span>
          <span className="text-sm font-semibold opacity-90">kcal</span>
        </div>
      </div>
      <div
        className="relative pt-10"
        style={{ display: expanded ? "flex" : "none" }}
      >
        <SmallNutrientsCard
          proteins={Math.round((amount * proteins) / 100)}
          carbs={Math.round((amount * carbs) / 100)}
          fat={Math.round((amount * fat) / 100)}
        />
      </div>
    </div>
  );
}
