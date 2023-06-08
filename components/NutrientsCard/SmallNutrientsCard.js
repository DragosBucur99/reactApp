import { TbMeat } from "react-icons/tb";
import { CiWheat } from "react-icons/ci";
import { GiAvocado } from "react-icons/gi";

export default function SmallNutrientsCard({ proteins, carbs, fat }) {
  return (
    <div className="flex gap-3 w-full">
      <div className="relative flex flex-col p-5 text-center gap-1 w-full bg-indigo-800 rounded-md shadow-sm">
        <div className="absolute top-[-1.25rem] left-0 flex items-center justify-center w-full h-10">
          <TbMeat className="text-3xl z-10" />
        </div>
        <span className="text-md font-semibold">{proteins}g</span>
        <span className="text-xs font-semibold opacity-70 tracking-wider">
          Protein
        </span>
      </div>
      <div className="relative flex flex-col p-5 text-center gap-1 w-full bg-indigo-800 rounded-md shadow-sm">
        <div className="absolute top-[-1.25rem] left-0 flex items-center justify-center w-full h-10">
          <CiWheat className="text-3xl z-10" />
        </div>
        <span className="text-md font-semibold">{carbs}g</span>
        <span className="text-xs font-semibold opacity-70 tracking-wider">
          Carbs
        </span>
      </div>
      <div className="relative flex flex-col p-5 text-center gap-1 w-full bg-indigo-800 rounded-md shadow-sm">
        <div className="absolute top-[-1.25rem] left-0 flex items-center justify-center w-full h-10">
          <GiAvocado className="text-3xl z-10" />
        </div>
        <span className="text-md font-semibold">{fat}g</span>
        <span className="text-xs font-semibold opacity-70 tracking-wider">
          Fat
        </span>
      </div>
    </div>
  );
}
