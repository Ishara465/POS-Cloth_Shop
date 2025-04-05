import React from "react";
import SideNav from "../shared/SideNav";
import ReturnsRefunds from "../components/return/ReturnsRefunds";
import ReturnProduct from "../components/return/ReturnProduct";

const Return = () => {
  return (
    <div className="flex bg-[#232323] h-[calc(100vh-7.5rem)] overflow-hidden  ">
      {/* left div */}
      <div className="flex-1 ml-5  flex m-3">
        <SideNav />
      </div>

      {/* right div */}
      <div className="flex-7 justify-center gap-10 flex  m-5 bg-[#232323]">
        <ReturnsRefunds />
        <ReturnProduct />
      </div>
    </div>
  );
};

export default Return;
