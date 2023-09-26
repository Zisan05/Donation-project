import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';



const data = [
  { name: 'Category A', value: 400 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 200 },
  { name: 'Category D', value: 100 },
];

function PieChartComponent() {
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default PieChartComponent;