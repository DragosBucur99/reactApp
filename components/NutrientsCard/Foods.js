import { useState } from "react";
import Food from "./Food";

export default function Foods({ foods, setFoods, click }) {
  return (
    <div
      className="flex-col gap-3 w-full"
      style={{ display: click ? "none" : "flex" }}
    >
      {foods.map((food, index) => (
        <Food
          key={food.id}
          calories={food.calories}
          proteins={food.totalNutrients.PROCNT.quantity}
          carbs={food.totalNutrients.CHOCDF.quantity}
          fat={food.totalNutrients.FAT.quantity}
          setFoods={setFoods}
          foods={foods}
          id={food.id}
          name={food.name}
          amount={food.amount}
          expanded={food.expanded}
        />
      ))}
    </div>
  );
}
