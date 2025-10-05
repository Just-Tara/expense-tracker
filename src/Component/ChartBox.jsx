// ChartBox.jsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Income', value: 6000 },
  { name: 'Expense', value: 2500 },
];

const COLORS = ['#22c55e', '#ef4444']; 

function ChartBox() {
  return (
    <div className="hidden lg:flex flex-col absolute right-0 w-[24%] h-[100%]  bg-[#f2f2f2] dark:bg-gray-900 shadow-md p-5  items-center rounded-l-2xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Income vs Expense</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
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
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartBox;
