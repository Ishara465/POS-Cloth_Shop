import React from "react";
import SideNav from "../shared/SideNav";
import CustomerTable from "../components/customer/CustomerTable";
import AddCustomer from "../components/customer/AddCustomer";

const Customer = () => {
  return (
    <div className="flex bg-[#232323] h-[calc(100vh-7.5rem)] overflow-hidden">
      {/* Left Div */}
      <div className="flex-1 m-2 rounded-2xl shadow-lg">
        <SideNav />
      </div>
      {/* Middle Div */}
      <div className="flex-7 bg-[#232323] m-3">
        <div className="flex px-10 py-2 gap-4">
          <CustomerTable />
        </div>
      </div>

      {/* Right Div */}
      <div className="flex-2  m-3">
        <AddCustomer />
      </div>
    </div>
  );
};

export default Customer;
