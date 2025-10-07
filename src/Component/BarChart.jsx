// src/Component/BarChart.jsx
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const weeklyData = [
  { day: "Mon", amount: 80 },
  { day: "Tue", amount: 120 },
  { day: "Wed", amount: 90 },
  { day: "Thu", amount: 150 },
  { day: "Fri", amount: 100 },
  { day: "Sat", amount: 170 },
  { day: "Sun", amount: 60 },
];

function BarChartComponent() {
  return (
    <div className="w-full">
      <h2 className="text-lg text-center font-semibold mb-2 text-gray-800 dark:text-white">
        Weekly Spending Trends
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <ReBarChart data={weeklyData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#2563eb" radius={[3, 3, 0, 0]} />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
