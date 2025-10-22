import React, { useMemo } from "react";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTransactions } from "../Context/TransactionContext";  
import BarChartComponent from "./BarChart";

const data = [
  { name: "Income", value: 6000 },
  { name: "Expense", value: 2500 },
];

const COLORS = ["#22c55e", "#ef4444"];

function ChartBox() {

  const { transactions } = useTransactions();

  const { totalIncome, totalExpense } = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    return { totalIncome: income, totalExpense: expense };
  }, [transactions]);
    const pieData = [
      { name: "Income", value: totalIncome },
      { name: "Expense", value: totalExpense },
    ]

  return (
    <div className="hidden lg:flex flex-col absolute right-0 top-0 h-full w-[24%] overflow-y-auto bg-[#f2f2f2] dark:bg-gray-900 shadow-md p-5 items-center rounded-l-2xl">
      {/* Pie Chart Section */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Income vs Expense Ratio
      </h2>
      <div className="w-full mb-8">
        <ResponsiveContainer width="100%" height={200}>
          <RePieChart>
            <Pie
              data={pieData}
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
     <div className="w-full flex-1 flex items-center justify-center">
        <BarChartComponent />
      </div>
    </div>
  );
}

export default ChartBox;
