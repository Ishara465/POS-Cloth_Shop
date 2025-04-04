import React from "react";
import SideNav from "../shared/SideNav";
import SalesTable from "../components/sales/SalesTable";
import DiscountTable from "../components/sales/DiscountTable";
import Payment from "../components/sales/Payment";

const Sales = () => {
  return (
    <div className="flex bg-[#232323] h-[calc(100vh-7.5rem)] overflow-hidden ">
      {/* Left Div */}
      <div className="flex-1 flex m-3 rounded-2xl shadow-6xl">
        <SideNav />
      </div>

      {/* Middle Div */}
      <div className="flex-5 m-3 bg-[#232323] flex flex-row ">
        <SalesTable />
        <DiscountTable />
      </div>
      {/* Right Div */}
      <div className="flex-2 flex m-3  bg-[#232323] ml-1">
        {" "}
        <Payment />
      </div>
    </div>
  );
};

export default Sales;
