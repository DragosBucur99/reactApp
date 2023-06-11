import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircleChart({ chartData }) {
  return (
    <div className="w-full h-full flex justify-center">
      <Doughnut
        data={chartData}
        options={{
          cutout: 60,
          layout: {
            padding: 0,
          },
        }}
      />
    </div>
  );
}
