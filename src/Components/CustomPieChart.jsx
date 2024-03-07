import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Category 1', value: 30 },
  { name: 'Category 2', value: 70 },
];

const COLORS = ['#FFBB28', '#0088FE', '#00C49F'];

const CustomPieChart = () => {
  const total = data.reduce((sum, { value }) => sum + value, 0);
  const centerData = [{ name: 'Total', value: total }];

  const legendFormatter = (value, entry) => {
    const { payload } = entry;
    const percentage = (payload.value / total) * 100;
    return `${payload.name} (${percentage.toFixed(0)}%)`;
  };

  return (
    <ResponsiveContainer width="30%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius="80%"
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={centerData}
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={60}
          fill="white"
        />
        <Legend
          align="right"
          verticalAlign="middle"
          layout="vertical"
          iconType="circle"
          formatter={legendFormatter}
          wrapperStyle={{
            right: '1px',
            top: '50%',
            transform: 'translateY(-50%)',
            // marginLeft:'100px',
            // paddingLeft:'10px'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
