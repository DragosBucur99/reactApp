import { useState } from "react";
import Food from "./Food";

export default function Foods({ foods, setFoods, click }) {
  return (
    <div
      className="flex-col gap-5 w-full"
      style={{ display: click ? "none" : "flex" }}
    >
      {foods.map((food, index) => (
        <Food
          calories={food.calories}
          proteins={food.totalNutrients.PROCNT.quantity}
          carbs={food.totalNutrients.CHOCDF.quantity}
          setFoods={setFoods}
          foods={foods}
          id={food.id}
          name={food.name}
          expanded={food.expanded}
        />
      ))}
    </div>
  );
}
