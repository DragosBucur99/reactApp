import { useState } from "react";

export default function Food({
  calories,
  proteins,
  carbs,
  name,
  foods,
  setFoods,
  id,
  expanded,
}) {
  const [foodState, setFoodState] = useState(false);
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
    <div className="p-3 flex flex-col gap-2 shadow-md">
      <div
        // onClick={deleteFood}
        onClick={handleExpand}
        className="flex w-full justify-between"
      >
        <span>{name}</span>
        <span>Calories: {calories}</span>
      </div>
      <div className="flex-col" style={{ display: expanded ? "flex" : "none" }}>
        <span>Proteins: {proteins}</span>
        <span>Carbs: {carbs}</span>
      </div>
    </div>
  );
}
