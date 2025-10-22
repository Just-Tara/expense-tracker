// src/Component/BarChart.jsx
import React, { useMemo, useState, useEffect } from "react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTransactions } from "../Context/TransactionContext";

function BarChartComponent() {
  const { transactions } = useTransactions();
  const [isCompact, setIsCompact] = useState(window.innerWidth < 1440);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth < 1440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weeklyData = useMemo(() => {
    const dataMap = days.reduce((acc, day) => ({ ...acc, [day]: 0 }), {});

    let totalIncome = 0;

    transactions.forEach((t) => {
      if (t.type === "income") totalIncome += Number(t.amount);
      if (t.type === "expense") {
        const dayIndex = new Date(t.date).getDay();
        const dayName = days[dayIndex];
        dataMap[dayName] += Number(t.amount);
      }
    });

    // Avoid divide-by-zero error
    totalIncome = totalIncome || 1;

    // Convert to percentage of total income
    return days.map((day) => ({
      day,
      amount: dataMap[day],
      percentage: (dataMap[day] / totalIncome) * 100,
    }));
  }, [transactions]);

  return (
    <div className="w-full h-full flex flex-col">
      <h2 className="text-lg text-center font-semibold mb-2 text-gray-800 dark:text-white">
        Weekly Spending Trends
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <ReBarChart data={weeklyData}>
          <XAxis
            dataKey="day"
            tickFormatter={(value) => {
              if (isCompact) {
                if (value === "Thu") return "Th"; 
                return value.charAt(0); 
              }
              return value; 
            }}
          />
         {/**  <YAxis tickFormatter={(val) => `${val}%`} /> */}
          <Tooltip
            formatter={(value, name, props) => [
              `${props.payload.amount} (${props.payload.percentage.toFixed(1)}%)`,
              "Spending",
            ]}
          />
          <Bar
            dataKey="percentage"
            fill="#2563eb"
            radius={[5, 5, 0, 0]}
            barSize={isCompact ? 20 : 30}
          />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
