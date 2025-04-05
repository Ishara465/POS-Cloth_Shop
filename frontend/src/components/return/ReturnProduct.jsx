import React, { useState } from "react";

const ReturnProduct = () => {
  const [productName, setProductName] = useState("Shirt");
  const [returnQuantity, setReturnQuantity] = useState(1);
  const [originalPrice, setOriginalPrice] = useState(25);
  const [refundAmount, setRefundAmount] = useState(25);

  return (
    <div className="bg-[#383838] text-[#EEEEEE] p-6 rounded-lg w-100 h-150 ">
      <h1 className="text-2xl font-bold mb-3 text-center">Refund Processing</h1>

      {/* Product Details */}
      <div className="mb-4">
        <div className="mb-2">
          <label className="block mb-1">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Return Quantity:</label>
          <input
            type="number"
            value={returnQuantity}
            onChange={(e) => setReturnQuantity(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Original Price:</label>
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Refund Amount:</label>
          <input
            type="number"
            value={refundAmount}
            onChange={(e) => setRefundAmount(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
          />
        </div>
      </div>

      {/* Refund Method */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Refund Method:</h2>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
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

export default ReturnProduct;
