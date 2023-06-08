import { useRef, useState } from "react";
import SmallNutrientsCard from "./SmallNutrientsCard";
import { FiEdit2 } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

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
  value,
  editable,
}) {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

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

  const handleClick = (e) => {
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
      if (e.target.tagName !== "INPUT") {
        setFoods(
          foods.map((food) => {
            if (food.id === id) {
              return { ...food, editable: !food.editable };
            } else {
              return food;
            }
          })
        );
      }
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

  const stateManager = {
    style: {
      border: undefined,
    },
  };

  if (editable) {
    stateManager.style.border = "2px solid #F3752B";
  }
  if (deleteStatus) {
    stateManager.style.border = "2px solid red";
  }
  return (
    <div
      className="relative p-3 flex flex-col gap-3 bg-indigo-600 rounded-md shadow-md cursor-pointer border-2 border-transparent"
      onClick={handleClick}
      style={{ border: stateManager.style.border }}
    >
      <div className="flex w-full justify-between">
        <div className="flex gap-1 items-center">
          <div className="flex items-center gap-1">
            <span className="w-5 flex items-center">
              <AiOutlineArrowDown style={{ display: expanded ? "none" : "" }} />
              <AiOutlineArrowUp style={{ display: expanded ? "" : "none" }} />
            </span>
            {/* TO-DO: (Partea de EDIT a cantitatii) */}
            <span className="text-lg tracking-wide font-semibold">{name}</span>
            <div className="flex flex-row items-center gap-2">
              <span
                className="text-xs opacity-50 font-semibold z-10"
                style={{
                  textDecoration: editable ? "line-through" : undefined,
                }}
              >
                {amount}g
              </span>
            </div>
          </div>
          <div
            className="items-center gap-2"
            style={{ display: editable ? "flex" : "none" }}
          >
            <span>
              <BsArrowRight />
            </span>
            <input
              ref={inputRef}
              placeholder={amount}
              onChange={() =>
                (foods.find((food) => food.id === id).amount =
                  inputRef.current.value)
              }
              className="w-1/3 border-0 bg-transparent"
            />
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
