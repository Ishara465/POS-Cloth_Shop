import React, { useState } from "react";
import SideNav from "../shared/SideNav";
import SalesTable from "../components/sales/SalesTable";
import DiscountTable from "../components/sales/DiscountTable";
import Payment from "../components/sales/Payment";

const Sales = () => {
  const [finalAmount, setFinalAmount] = useState(0);

  const [payment, setPayment] = useState(0);

  // This function will be called by SalesTable when Checkout is clicked
  const handleCheckout = (amount) => {
    setFinalAmount(amount);
  };

  const handlePayment = (amount) => {
    setPayment(amount);
  };
  return (
    <div className="flex bg-[#232323] h-[calc(100vh-7.5rem)] overflow-hidden ">
      {/* Left Div */}
      <div className="flex-1 flex m-3 rounded-2xl shadow-6xl">
        <SideNav />
      </div>

      {/* Middle Div */}
      <div className="flex-5 m-3 bg-[#232323] flex flex-row ">
        <SalesTable onCheckout={handleCheckout} />
        <DiscountTable finalAmount={finalAmount} paymentFunc={handlePayment} />
      </div>
      {/* Right Div */}
      <div className="flex-2 flex m-3  bg-[#232323] ml-1">
        {" "}
        <Payment payment={payment} />
      </div>
    </div>
  );
};

export default Sales;
