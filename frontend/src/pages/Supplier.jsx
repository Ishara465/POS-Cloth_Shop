import React from "react";
import SideNav from "../shared/SideNav";
import SupplierTable from "../components/supplier/SupplierTable";
import AddSupplier from "../components/supplier/AddSupplier";

const Supplier = () => {
  return (
    <div className="bg-[#232323] h-[calc(100vh-7.5rem)] overflow-hidden flex gap-2">
      {/* Left Div */}
      <div className="flex-1 m-3 ">
        <SideNav />
      </div>

      {/* Right Div */}
      <div className="flex-7 m-3 flex flex-row gap-5">
        <div className="flex">
          <SupplierTable />
        </div>
        <div>
          <AddSupplier />
        </div>
      </div>
    </div>
  );
};

export default Supplier;
