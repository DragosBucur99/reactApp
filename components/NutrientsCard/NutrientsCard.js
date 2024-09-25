import { useEffect, useState } from "react";
import FormNutrients from "./FormNutrients";
import Foods from "./Foods";
import Menu from "./Menu";
import NutrientsSummary from "./NutrientsSummary";
import CircleChart from "../CircleChart";

export default function NutrientsCard(props) {
  const [foods, setFoods] = useState([]);
  const [click, setClick] = useState(false);
  const [value, setValue] = useState(100);
  const [loader, setLoader] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [totalCalories, setTotalCalories] = useState();

  useEffect(() => {
    setTotalCalories(
      Math.round(foods.map((food) => food.calories).reduce((x, y) => x + y, 0))
    );
    setChartData({
      datasets: [
        {
          data: [
            Math.round(
              foods.map((food) => food.proteins).reduce((x, y) => x + y, 0)
            ),
            Math.round(
              foods.map((food) => food.carbs).reduce((x, y) => x + y, 0)
            ),
            Math.round(
              foods.map((food) => food.fat).reduce((x, y) => x + y, 0)
            ),
          ],
          backgroundColor: ["#78BC61", "#3581B8", "#EC0B43"],
          borderWidth: 0,
        },
      ],
    });
  }, [foods]);

  const handleClick = () => {
    setClick(!click);
    if (loader === true) setLoader(!loader);
  };

  return (
    <div className="flex flex-col gap-5 snap-start snap-always shrink-0 w-full rounded-lg h-full lg:shadow-md lg:h-full lg:flex-1">
      <div
        className="flex px-5 w-full min-h-40 rounded-lg gap-5"
        style={{ backgroundColor: props.color }}
      >
        <CircleChart chartData={chartData} totalCalories={totalCalories} />
        <NutrientsSummary foods={foods} />
      </div>
      {/*  */}
      <div
        className="relative w-full h-full rounded-lg p-5 flex flex-col gap-5 justify-between overflow-y-auto hidescrollbar"
        style={{ backgroundColor: props.color }}
      >
        <div
          style={{ display: foods.length > 0 || click ? "none" : "flex" }}
          className="flex-col items-center justify-center text-center h-full"
        >
          <span>🤔Hmm...It looks like you did not add any meals!</span>
          <button
            onClick={handleClick}
            style={{ display: click ? "none" : "" }}
            className="text-indigo-600"
            data-cy="meal-cta-button"
          >
            Put some meat on your bones!
          </button>
        </div>
        <FormNutrients
          setFoods={setFoods}
          setClick={setClick}
          setValue={setValue}
          setChartData={setChartData}
          chartData={chartData}
          value={value}
          click={click}
          loader={loader}
          setLoader={setLoader}
        />
        <div className="w-full h-full relative overflow-y-auto hidescrollbar">
          <Foods
            foods={foods}
            setFoods={setFoods}
            click={click}
            deleteState={deleteState}
            editState={editState}
            setEditState={setEditState}
            setValue={setValue}
            value={value}
          />
        </div>
        <div
          className="justify-center items-center min-h-[20%] h-[20%] w-full"
          style={{ display: foods.length > 0 && !click ? "flex" : "none" }}
        >
          <Menu
            click={click}
            setClick={setClick}
            loader={loader}
            setLoader={setLoader}
            deleteState={deleteState}
            setDeleteState={setDeleteState}
            foods={foods}
            setFoods={setFoods}
            editState={editState}
            setEditState={setEditState}
            value={value}
            setChartData={setChartData}
            chartData={chartData}
          />
        </div>
      </div>
    </div>
  );
}

NutrientsCard.defaultProps = {
  color: "#1d1d1d",
};
