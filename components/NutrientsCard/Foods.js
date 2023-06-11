import { useState } from "react";
import Food from "./Food";

export default function Foods({
  foods,
  setFoods,
  click,
  deleteState,
  editState,
  setEditState,
  setValue,
  value,
}) {
  return (
    <div
      className="flex-col gap-4 w-full"
      style={{ display: click ? "none" : "flex" }}
    >
      {foods.map((food, index) => (
        <Food
          key={food.id}
          calories={food.calories}
          proteins={food.proteins}
          carbs={food.carbs}
          fat={food.fat}
          setFoods={setFoods}
          foods={foods}
          id={food.id}
          name={food.name}
          amount={food.amount}
          expanded={food.expanded}
          deleteState={deleteState}
          deleteStatus={food.deleteStatus}
          editable={food.editable}
          editState={editState}
          setEditState={setEditState}
          setValue={setValue}
          value={value}
        />
      ))}
    </div>
  );
}
