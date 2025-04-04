import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", earnings: 2 },
  { name: "Feb", earnings: 4 },
  { name: "Mar", earnings: 6 },
  { name: "Apr", earnings: 8 },
  { name: "May", earnings: 5 },
];

const EarningSummaryCard = () => {
  return (
    <div className="bg-[#383838] p-10 rounded-lg w-165 h-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-[#EEEEEE] text-xl font-bold">Earnings Summary</h1>
        <button className="text-[#FF7171] text-sm font-semibold">
          Last 5 Months ▼
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 15, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#8A8A8A" />
          <XAxis dataKey="name" stroke="#EEEEEE" />
          <YAxis stroke="#EEEEEE" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#232323",
              border: "none",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#FF7171" }}
            itemStyle={{ color: "#EEEEEE" }}
          />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#FF7171"
            strokeWidth={2}
            dot={{ r: 6, fill: "#FF7171" }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningSummaryCard;
