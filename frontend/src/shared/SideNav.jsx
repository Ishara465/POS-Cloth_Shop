import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdCalculate } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiKeyReturnFill } from "react-icons/pi";
import { FaTruckFast } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
const SideNav = () => {
  const navigate = useNavigate();

  return (
    <div className="side-nav bg-[#383838] w-70 h-full flex flex-col justify-between p-5 rounded-lg shadow-lg shadow-black">
      <div className="flex flex-col gap-5 m-5 ">
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <FaHome className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />{" "}
          {/* Icon color changes on hover */}
          Home
        </button>

        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/product")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <MdOutlineProductionQuantityLimits className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />{" "}
          {/* Icon color changes on hover */}
          Product
        </button>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/sales")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <MdCalculate className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />{" "}
          {/* Icon color changes on hover */}
          Sales
        </button>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/inventory")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <MdOutlineInventory className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />{" "}
          {/* Icon color changes on hover */}
          Inventory
        </button>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          // onClick={() => navigate("/dashboard")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <IoMdPerson className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />{" "}
          {/* Icon color changes on hover */}
          Customer
        </button>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          // onClick={() => navigate("/dashboard")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <PiKeyReturnFill className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />{" "}
          {/* Icon color changes on hover */}
          Returns
        </button>

        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/dashboard")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <FaTruckFast className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />{" "}
          {/* Icon color changes on hover */}
          Supplier
        </button>
      </div>

      <div>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          // onClick={() => navigate("/dashboard")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <BiLogOut className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />{" "}
          {/* Icon color changes on hover */}
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNav;
