import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircleChart({ chartData, totalCalories }) {
  return (
    <div className="relative flex items-center py-2">
      <Doughnut
        className="mb-3"
        data={chartData}
        options={{
          cutout: 55,
          layout: {
            padding: 0,
          },
        }}
      />
      <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <span className="text-2xl font-bold">{totalCalories}</span>
        <span className="text-sm tracking-wide opacity-50">kcal</span>
      </div>
    </div>
  );
}
