import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Revenue", value: 58, color: "#00FF00" }, // Green
  { name: "Available", value: 24, color: "#FFFF00" }, // Yellow
  { name: "Sold", value: 18, color: "#808080" }, // Gray
];

const RentStatusCard = () => {
  return (
    <div className="bg-[#383838] p-6 rounded-lg w-120 h-170">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[#EEEEEE] text-xl font-bold">Status</h1>
        <button className="text-[#FF7171] text-sm font-semibold">
          This Week ▼
        </button>
      </div>

      {/* Donut Chart */}
      <div className="flex justify-center items-center h-2/3">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={5}
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></div>
              <p className="text-[#EEEEEE] text-sm">{entry.name}</p>
            </div>
            <p className="text-[#EEEEEE] text-sm">{entry.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentStatusCard;
