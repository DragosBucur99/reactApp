import { TbMeat } from "react-icons/tb";
import { CiWheat } from "react-icons/ci";
import { GiAvocado } from "react-icons/gi";

export default function NutrientsSummary({ foods }) {
  const totalProteins = Math.round(
    foods.map((food) => food.proteins).reduce((x, y) => x + y, 0)
  );
  const totalCarbs = Math.round(
    foods.map((food) => food.carbs).reduce((x, y) => x + y, 0)
  );
  const totalFat = Math.round(
    foods.map((food) => food.fat).reduce((x, y) => x + y, 0)
  );

  const splitNumber = (num) => Array.from(String(num), Number);

  const unavailableStyle = "opacity-30 grayscale";
  const availableStyle = "opacity-100 grayscale-0";

  return (
    <div className="flex gap-3 flex-1">
      <div
        className={`bg-[#78BC61] w-full h-[80%] rounded-b-2xl flex flex-col py-1 ${
          foods.length > 0 ? availableStyle : unavailableStyle
        }`}
      >
        <div className="w-full h-full flex flex-col justify-between items-center gap-2">
          <div className="h-full flex items-center justify-center flex-col">
            {splitNumber(totalProteins).map((char) => (
              <span className="text-bold text-lg">{char}</span>
            ))}
          </div>
          <div className="">
            <TbMeat className="text-2xl z-10 text-[#3c5e31]" />
          </div>
        </div>
      </div>
      <div
        className={`bg-[#3581B8] w-full h-[80%] rounded-b-2xl flex flex-col py-1 ${
          foods.length > 0 ? availableStyle : unavailableStyle
        }`}
      >
        <div className="w-full h-full flex flex-col justify-between items-center gap-2">
          <div className="h-full flex items-center justify-center flex-col">
            {splitNumber(totalCarbs).map((char) => (
              <span className="text-bold text-lg">{char}</span>
            ))}
          </div>
          <div className="">
            <CiWheat className="text-2xl z-10 text-[#204D6E]" />
          </div>
        </div>
      </div>
      <div
        className={`bg-[#EC0B43] w-full h-[80%] rounded-b-2xl flex flex-col py-1 ${
          foods.length > 0 ? availableStyle : unavailableStyle
        }`}
      >
        <div className="w-full h-full flex flex-col justify-between items-center gap-2">
          <div className="h-full flex items-center justify-center flex-col">
            {splitNumber(totalFat).map((char) => (
              <span className="text-bold text-lg">{char}</span>
            ))}
          </div>
          <div className="">
            <GiAvocado className="text-2xl z-10 text-[#8e0728]" />
          </div>
        </div>
      </div>
    </div>
  );
}
