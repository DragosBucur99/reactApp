import { BsTrash } from "react-icons/bs";

export default function DeleteState({
  deleteState,
  foods,
  setFoods,
  setDeleteState,
}) {
  const foodsToBeDeleted = foods.filter((food) => food.deleteStatus === true);

  const handleDelete = () => {
    setFoods(foods.filter((food) => food.deleteStatus === false));
    setDeleteState(false);
  };

  return (
    <div style={{ display: deleteState ? "" : "none" }}>
      <span
        style={{ display: foodsToBeDeleted.length < 1 ? "" : "none" }}
        className="text-sm font-semibold"
      >
        Select the meals you wish to delete
      </span>
      <div
        className="flex gap-4"
        style={{ display: foodsToBeDeleted.length > 0 ? "flex" : "none" }}
      >
        <div className="flex gap-1 items-center">
          <span>
            <BsTrash />
          </span>
          <span className="text-sm font-semibold">
            x {foodsToBeDeleted.length}{" "}
          </span>
        </div>
        <button
          onClick={handleDelete}
          className="bg-red-600 py-1 px-2 text-center rounded-lg font-bold"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
