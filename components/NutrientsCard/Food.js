import { useRef, useState } from "react";
import SmallNutrientsCard from "./SmallNutrientsCard";
import { FiEdit2 } from "react-icons/fi";

import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineCheck,
} from "react-icons/ai";

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
  editState,
  setEditState,
  editable,
}) {
  const [value, setValue] = useState(amount);
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("pula");
    setFoods(
      foods.map((food) => {
        if (food.id === id) {
          return { ...food, amount: value };
        } else {
          return food;
        }
      })
    );
    setEditState(false);
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
    } else if (editState) {
      inputRef.current.focus();
      setFoods(
        foods.map((food) => {
          if (food.id === id) {
            return { ...food, editable: !food.editable };
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
      className="relative p-3 flex flex-col gap-3 bg-indigo-600 rounded-md shadow-md"
      onClick={handleClick}
      style={{ border: deleteStatus ? "2px solid red" : "" }}
    >
      <div className="flex w-full justify-between">
        <div className="flex gap-1 items-center">
          <div className="flex items-center gap-1">
            <span className="w-5 flex items-center justify-center">
              <AiOutlineArrowDown style={{ display: expanded ? "none" : "" }} />
              <AiOutlineArrowUp style={{ display: expanded ? "" : "none" }} />
            </span>
            <span className="text-lg tracking-wide font-semibold">{name}</span>
            {/* <span className="text-xs opacity-50 font-semibold">{amount}g</span> */}
            <div className="text-xs opacity-50 font-semibold h-full flex items-center justify-center">
              <form id="edit-form" onSubmit={handleFormSubmit}>
                <input
                  type="number"
                  className="editableInput w-[1.25rem]"
                  ref={inputRef}
                  onChange={() => setValue(inputRef.current.value)}
                  value={value}
                  min="1"
                  max="999"
                  style={{ pointerEvents: editState ? "" : "none" }}
                ></input>
                <span>g</span>
              </form>
            </div>
          </div>
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
