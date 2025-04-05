import React from "react";
import SideNav from "../shared/SideNav";
import InventoryListPage from "../components/Inventory/InventoryListPage";

const Inventory = () => {
  return (
    <div className="flex bg-[#232323] h-[calc(100vh-7.5rem)] overflow-hidden ">
      {/* Left Div */}
      <div className="flex-1 flex m-3">
        <SideNav />
      </div>

      {/* Right Div */}
      <div className="flex-7 m-3 flex bg-[#232323]">
        <div>
          <InventoryListPage />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
