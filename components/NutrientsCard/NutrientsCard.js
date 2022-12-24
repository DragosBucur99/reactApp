import { useEffect, useRef, useState } from "react";
import FormNutrients from "./FormNutrients";
import Foods from "./Foods";

export default function NutrientsCard(props) {
  // useEffect(() => {
  //   console.log(foods);
  // }, [foods]);
  const [foods, setFoods] = useState([]);
  const [click, setClick] = useState(false);
  const [value, setValue] = useState(100);
  const [loader, setLoader] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setLoader(!loader);
  };
  return (
    <div className="flex flex-col gap-5 snap-start snap-always shrink-0 w-full rounded-lg h-full lg:shadow-md lg:h-full lg:flex-1">
      <div
        className="w-full min-h-40 bg-red-400 rounded-lg"
        style={{ backgroundColor: props.color }}
      ></div>
      {/*  */}
      <div
        className="relative w-full h-full bg-red-400 rounded-lg p-5 flex flex-col gap-10 overflow-y-auto hidescrollbar"
        style={{ backgroundColor: props.color }}
      >
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
          setFoods={setFoods}
          setClick={setClick}
          setValue={setValue}
          value={value}
          click={click}
          loader={loader}
          setLoader={setLoader}
        />
        <div className="w-full max-h-[80%] relative overflow-y-auto hidescrollbar">
          <Foods foods={foods} setFoods={setFoods} click={click} />
        </div>
        <div className="flex justify-center items-center min-h-[20%] w-full">
          <button
            className="text-white font-semibold w-full rounded-xl p-2 border-4 border-indigo-700 tracking-wide hover:bg-indigo-700"
            style={{ display: foods.length > 0 && !click ? "" : "none" }}
            onClick={handleClick}
          >
            Add meal
          </button>
        </div>
      </div>
    </div>
  );
}

NutrientsCard.defaultProps = {
  color: "#1d1d1d",
};
