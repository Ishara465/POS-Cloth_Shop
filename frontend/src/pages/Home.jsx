import React, { useState, useEffect } from "react";
import SideNav from "../shared/SideNav";
import {
  FaRupeeSign,
  FaBoxOpen,
  FaUsers,
  FaTruck,
  FaPlus,
  FaChartBar,
  FaUserPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    label: "Total Sales",
    value: "₹1,20,000",
    color: "bg-green-600",
    icon: <FaRupeeSign size={28} />,
  },
  {
    label: "Products",
    value: "320",
    color: "bg-blue-600",
    icon: <FaBoxOpen size={28} />,
  },
  {
    label: "Customers",
    value: "150",
    color: "bg-yellow-500",
    icon: <FaUsers size={28} />,
  },
  {
    label: "Suppliers",
    value: "12",
    color: "bg-purple-600",
    icon: <FaTruck size={28} />,
  },
];

const quickActions = [
  { label: "Add Product", icon: <FaPlus />, path: "/product" },
  { label: "View Sales", icon: <FaChartBar />, path: "/sales" },
  { label: "Add Customer", icon: <FaUserPlus />, path: "/customer" },
];

const Home = () => {
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex bg-[#232323] h-[calc(100vh-7.5rem)] overflow-hidden gap-2">
      {/* Left Div */}
      <div className="flex-1 m-3 rounded-lg shadow-6xl">
        <SideNav />
      </div>

      {/* Right Div */}
      <div className="flex-7 flex flex-col justify-center items-center w-full">
        <div className="w-full max-w-5xl mx-auto mt-10">
          {/* Greeting and Time */}
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-white text-5xl font-bold mb-2 text-center drop-shadow-lg">
              Welcome to <span className="text-[#FF7171]">NeatFit POS</span>
            </h1>
            <p className="text-[#ababab] text-lg mb-2 text-center">
              Manage your sales, inventory, customers, and more with ease.
            </p>
            <span className="text-[#FF7171] text-lg font-mono">
              {time.toLocaleTimeString()}
            </span>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl p-6 shadow-lg flex flex-col items-center ${stat.color} bg-opacity-90 transform transition-transform hover:scale-105 cursor-pointer`}
              >
                <div className="mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-lg text-white tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {quickActions.map((action) => (
              <button
                key={action.label}
                onClick={() => navigate(action.path)}
                className="flex items-center gap-2 px-6 py-3 bg-[#FF7171] text-white rounded-lg shadow-md hover:bg-[#ff4949] transition-all font-semibold text-lg"
              >
                {action.icon}
                {action.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <span className="text-[#ababab] text-sm">
            &copy; {new Date().getFullYear()} NeatFit POS. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
