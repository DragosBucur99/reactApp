export default function MenuCta({
  setItemsState,
  itemsState,
  deleteState,
  setDeleteState,
  foods,
  setFoods,
  editState,
  setEditState,
}) {
  const handleClick = () => {
    if (deleteState) {
      setFoods(
        foods.map((food) => {
          if (food.deleteStatus === true) {
            return { ...food, deleteStatus: false };
          } else {
            return food;
          }
        })
      );
      setDeleteState(!deleteState);
    } else if (editState) {
      setFoods(
        foods.map((food) => {
          if (food.editable === true) {
            delete food.newAmount;
            delete food.newCalories;
            delete food.newProteins;
            delete food.newCarbs;
            return { ...food, editable: false };
          } else {
            return food;
          }
        })
      );
      setEditState(!editState);
    } else {
      setItemsState(!itemsState);
    }
  };

  return (
    <div
      className="p-2 cursor-pointer bg-indigo-700 rounded-full flex items-center justify-center shadow-md"
      data-cy="meal-menu-cta"
      onClick={handleClick}
    >
      <div className="flex justify-center items-center min-w-[1.6rem] min-h-[1.6rem]">
        <div className="relative w-full h-1">
          <div className="absolute inset-0 bg-red-100 z-10 origin-center rotate-45 flex items-center justify-center rounded-md">
            <div
              className="h-[140%] z-20 bg-indigo-700"
              style={{
                width: itemsState ? "0%" : "70%",
              }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-white origin-center rotate-[-45deg] flex items-center justify-center rounded-md">
            <div
              className="h-[140%] z-20 bg-indigo-700"
              style={{
                width: itemsState ? "0%" : "70%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
