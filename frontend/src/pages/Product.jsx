import React from "react";
import SideNav from "../shared/SideNav";
import AllProductTable from "../components/product/AllProductTable";
import ReturnProductTable from "../components/product/ReturnProductTable";
import QrSystem from "../components/product/QrSystem";

const Product = () => {
  return (
    <div className="bg-[#232323] h-[calc(100vh-7.5rem)] overflow-hidden flex gap-2">
      {/* Section 01 Div */}
      <div className="flex-1 m-3  rounded-2xl shadow-6xl">
        <SideNav />
      </div>

      {/* Section 02 div */}
      <div className="flex-7 bg-[#232323] ">
        {/* upper Bar */}
        <div className="flex justify-baseline px-10 py-3">
          {/* Search bar */}
          <div className="flex bg-[#383838] h-10 w-60 rounded-lg mr-5">
            <input
              type="text"
              placeholder="Search Items "
              className="text-[#EEEEEE] outline-none bg-[#383838] h-10 w-60 px-4 rounded-lg placeholder:text-[#EEEEEE]"
            />
          </div>
          {/* Cloth type */}
          <div className=" bg-[#383838] h-10 w-30 rounded-lg flex ">
            <input
              type="text"
              placeholder="Cloth type "
              className="text-[#EEEEEE] outline-none  px-4 rounded-lg placeholder:text-[#EEEEEE]"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="px-10 py-4 m-6 rounded-lg bg-[#383838] flex justify-baseline gap-10">
          <AllProductTable />
          <ReturnProductTable />
          {/* <QrSystem /> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
