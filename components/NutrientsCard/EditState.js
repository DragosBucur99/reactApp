import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

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
    <div style={{ display: editState ? "" : "none" }}>
      <span
        style={{ display: foodsToBeEdited.length < 1 ? "" : "none" }}
        className="text-sm font-semibold"
      >
        Select the items you wish to delete
      </span>
      <p>Are you happy with the changes?</p>
      <div className="flex gap-5 pt-2">
        <button onClick={updateFoodAmount}>
          <AiOutlineCheck />
        </button>
        <button>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}
