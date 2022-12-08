import NutrientsCard from "./NutrientsCard";
import FoodCard from "./FoodCard";
import TodoCard from "./TodoCard/TodoCard";

export default function CardsLayout() {
  return (
    <div className="flex-1 relative snap-mandatory snap-y px-4 pb-4 flex flex-col h-1/2 w-full mx-auto overflow-scroll overflow-y-scroll gap-10 lg:flex-row lg:overflow-hidden lg:py-20 lg:px-20 md:px-20">
      <NutrientsCard />
      <FoodCard />
      <TodoCard />
    </div>
  );
}
