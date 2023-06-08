import { FiEdit2 } from "react-icons/fi";

export default function EditState({ editState, setFoods, foods }) {
  const updateFoodAmount = () => {
    setFoods(
      foods.map((food) => {
        if (food.editable) {
          return { ...food, amount: food.amount, editable: !food.editable };
        } else {
          return food;
        }
      })
    );
  };

  const foodsToBeEdited = foods.filter((food) => food.editable === true);

  return (
    <div style={{ display: editState ? "" : "none" }} className="w-full px-4">
      <span
        style={{ display: foodsToBeEdited.length < 1 ? "" : "none" }}
        className="text-sm font-semibold"
      >
        Select the items you wish to edit.
      </span>
      <div
        className="w-full"
        style={{ display: foodsToBeEdited.length > 0 ? "flex" : "none" }}
      >
        <div className="flex gap-1 items-center w-full">
          <span>
            <FiEdit2 />
          </span>
          <span className="text-sm font-semibold">
            x {foodsToBeEdited.length}
          </span>
        </div>
        <button
          onClick={updateFoodAmount}
          className="bg-[#F3752B] py-1 px-2 text-center rounded-lg font-bold w-full"
        >
          EDIT
        </button>
      </div>
    </div>
  );
}
