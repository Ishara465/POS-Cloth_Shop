import React from "react";
import SideNav from "../shared/SideNav";
import RevenueCard from "../components/dashboard/RevenueCard";
import AvailableProductCard from "../components/dashboard/AvailableProductCard";
import SoldClothCard from "../components/dashboard/SoldClothCard";
import ReturnClothCard from "../components/dashboard/ReturnClothCard";
import RemainderCard from "../components/dashboard/RemainderCard";
import EarningSummaryCard from "../components/dashboard/EarningSummaryCard";
import ReChat from "../components/dashboard/ReChart";

const Dashboard = () => {
  return (
    <div className="flex bg-[#232323] h-[calc(100vh-7.5rem)] overflow-hidden">
      {/* Left div */}
      <div className="flex-1 m-2  rounded-2xl shadow-lg">
        <SideNav />
      </div>

      {/* right div */}
      <div className="flex-7 bg-[#232323] ">
        <div className="flex  px-10 py-2 gap-4">
          <RevenueCard />
          <AvailableProductCard />
        </div>

        <div className="flex px-10 py-2 gap-4">
          <SoldClothCard />
          <ReturnClothCard />
        </div>
        <div className="flex px-4 py-2 gap-1 absolute bottom-0 right-4 top-30">
          <RemainderCard />
          <ReChat />
        </div>
        <div></div>
        <div className="flex px-10 py-2">
          <EarningSummaryCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
