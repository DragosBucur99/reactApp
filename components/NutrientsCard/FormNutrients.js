import { useEffect, useRef, useState } from "react";
import { API_ID, API_KEY } from "../../utils/API_AUTH";
import { v4 as uuid } from "uuid";
import Loader from "./Loader";

export default function FormNutrients({
  setFoods,
  click,
  setClick,
  setValue,
  value,
  loader,
  setLoader,
}) {
  const unique_id = uuid();

  async function getNutrients(food) {
    const result = await fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&nutrition-type=cooking&ingr=${value}%20g%20${food}`
    );
    const respJson = await result.json();
    const meal = {
      id: unique_id.slice(0, 8),
      name: food,
      amount: value,
      calories: respJson.calories,
      proteins: respJson.totalNutrients.PROCNT.quantity,
      carbs: respJson.totalNutrients.CHOCDF.quantity,
      fat: respJson.totalNutrients.FAT.quantity,
      expanded: false,
      deleteStatus: false,
      editable: false,
    };

    setFoods((prev) => [
      ...prev,
      {
        ...meal,
      },
    ]);
  }

  const mealInput = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoader(!loader);
    getNutrients(mealInput.current.value).then(() => setClick(!click));
  };

  const valueRef = useRef();
  return (
    <div
      className="p-5 w-full h-full"
      style={{ display: click ? "block" : "none" }}
    >
      <Loader loader={loader} />
      <form
        onSubmit={handleFormSubmit}
        className="flex-col gap-10"
        style={{ display: loader ? "none" : "flex" }}
      >
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
