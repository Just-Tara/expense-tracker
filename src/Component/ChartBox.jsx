// src/Component/ChartBox.jsx
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import BarChartComponent from "./BarChart";

const data = [
  { name: "Income", value: 6000 },
  { name: "Expense", value: 2500 },
];

const COLORS = ["#22c55e", "#ef4444"];

function ChartBox() {
  return (
    <div className="hidden lg:flex flex-col absolute right-0 w-[24%] h-full overflow-y-auto bg-[#f2f2f2] dark:bg-gray-900 shadow-md p-5 items-center rounded-l-2xl">
      {/* Pie Chart Section */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Income vs Expense Ratio
      </h2>
      <div className="w-full mb-8">
        <ResponsiveContainer width="100%" height={250}>
          <RePieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </RePieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart Section */}
      <div className="w-full">
        <BarChartComponent />
      </div>
    </div>
  );
}

export default ChartBox;
