import { useEffect, useRef, useState } from "react";
import { API_ID, API_KEY } from "../../utils/API_AUTH";
import { v4 as uuid } from "uuid";
import Foods from "./Foods";

export default function FormNutrients({ foods, setFoods, click, setClick }) {
  const unique_id = uuid();

  async function getNutrients(food) {
    const result = await fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&nutrition-type=cooking&ingr=100%20g%20${food}`
    );
    const meal = await result.json();
    setFoods((prev) => [
      ...prev,
      { ...meal, id: unique_id.slice(0, 8), name: food, expanded: false },
    ]);
  }

  const mealInput = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getNutrients(mealInput.current.value);
    setClick(!click);
  };

  const valueRef = useRef();
  const [value, setValue] = useState(100);
  return (
    <div
      className="p-5 w-full h-full"
      style={{ display: click ? "block" : "none" }}
    >
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-10">
        <input
          type="text"
          placeholder="What have you eaten?"
          className="w-full"
          ref={mealInput}
        />
        <input
          type="number"
          ref={valueRef}
          value={value}
          min="1"
          required
          className="w-full"
          onChange={() => setValue(valueRef.current.value)}
        />
        <button
          type="submit"
          className="text-white font-semibold w-full rounded-xl p-2 bg-indigo-700 tracking-wide hover:bg-indigo-800"
        >
          Add meal
        </button>
      </form>
    </div>
  );
}
