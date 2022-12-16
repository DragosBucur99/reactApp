import { useEffect, useRef, useState } from "react";
import FormNutrients from "./FormNutrients";
import Foods from "./Foods";

export default function NutrientsCard(props) {
  // useEffect(() => {
  //   console.log(foods);
  // }, [foods]);
  const [foods, setFoods] = useState([]);
  const [click, setClick] = useState(false);

  return (
    <div className="flex flex-col gap-5 snap-start snap-always shrink-0 w-full rounded-lg h-full lg:shadow-md lg:h-full lg:flex-1">
      <div
        className="w-full h-[30%] bg-red-400 rounded-lg"
        style={{ backgroundColor: props.color }}
      ></div>
      {/*  */}
      <div
        className="relative w-full h-full flex-1 bg-red-400 rounded-lg p-5 flex flex-col gap-10 overflow-y-auto"
        style={{ backgroundColor: props.color }}
      >
        <button
          className="bg-red-400 absolute bottom-5 right-5 rounded-[100%] w-12 h-12"
          style={{ display: foods.length > 0 ? "" : "none" }}
          onClick={() => setClick(!click)}
        >
          ADD
        </button>
        <div
          style={{ display: foods.length > 0 || click ? "none" : "flex" }}
          className="flex-col items-center justify-center text-center h-full"
        >
          <span>🤔Hmm...It looks like you did not add any meals!</span>
          <button
            onClick={() => setClick(!click)}
            style={{ display: click ? "none" : "" }}
            className="text-indigo-600"
          >
            Put some meat on your bones!
          </button>
        </div>
        <FormNutrients
          foods={foods}
          setFoods={setFoods}
          setClick={setClick}
          click={click}
        />
        <Foods foods={foods} setFoods={setFoods} click={click} />
      </div>
    </div>
  );
}

NutrientsCard.defaultProps = {
  color: "#1d1d1d",
};
