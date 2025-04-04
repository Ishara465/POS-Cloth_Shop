import React from "react";
import { FaTshirt } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";

const AvailableProductCard = () => {
  return (
    <div className="bg-[#383838] w-80 h-30 rounded-lg flex justify-baseline items-center">
      <div className="  text-[#EEEEEE] text-2xl bg-[#232323] border-10 border-[#232323]  rounded-lg px-1 py-2 ml-2 ">
        <FaTshirt className=" items-center justify-center" />
      </div>

      <div className=" ml-4 flex flex-col items-start justify-start h-full">
        <h1 className="text-[#8A8A8A] mt-4 ">Available Products</h1>
        <h1 className="text-2xl font-semibold text-[#EEEEEE] mt-2">
          500 cloths
        </h1>
      </div>

      {/* Vertical Line */}
      <hr className="h-20 border-l border-[#8A8A8A] ml-4" />

      <div className="ml-4 flex flex-col items-start justify-start h-full">
        <div className="flex flex-row items-center gap-1 mt-4">
          <LuArrowDownUp className="text-green-500 text-lx" />
          <p className="text-green-500 text-[12px]">1.84%</p>
        </div>
        <h1 className="text-[#8A8A8A] mt-4">Last Week</h1>
      </div>
    </div>
  );
};

export default AvailableProductCard;
