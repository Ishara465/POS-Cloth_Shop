import React from "react";

const ReturnsRefunds = () => {
  return (
    <div className="bg-[#383838] text-[#EEEEEE] px-5 py-5 rounded-lg w-100 h-150 flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-2 text-center">Returns & Refunds</h1>

      {/* Search Bar */}
      <div className="">
        <input
          type="text"
          placeholder="Search Original Purchase"
          className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
        />
      </div>

      <div className=" flex flex-row gap-4">
        {/* Receipt Number or Customer Name */}
        <div className="mb-4">
          <div className="mb-4">
            <label className="block mb-2">Receipt Number:</label>
            <input
              type="text"
              placeholder="Enter Receipt Number"
              className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Customer Name:</label>
            <input
              type="text"
              placeholder="Enter Customer Name"
              className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="mb-4">
          <div className="mb-4">
            <label className="block mb-2">Product Name:</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Return Quantity:</label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mb-4 w-full h-20">
        <label className="block mb-2">Reason for Return:</label>
        <textarea
          placeholder="Enter Reason"
          className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
          rows="3"
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="flex mt-10 gap-4">
        <button className="flex-1 text-[#EEEEE] bg-[#232323] hover:bg-[#8A8A8A] font-semibold py-2 rounded-lg">
          Clear
        </button>
        <button className="flex-1 bg-[#FF7171] hover:bg-[#8A8A8A] text-[#EEEEEE] font-semibold py-2 rounded-lg">
          Confirm Refund
        </button>
      </div>
    </div>
  );
};

export default ReturnsRefunds;
