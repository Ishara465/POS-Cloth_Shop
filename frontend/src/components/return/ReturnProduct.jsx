import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRefundProcessing } from "../../redux/slices/return/refundProcessing";
import {
  handleClearRefund,
  handleRefundFunction,
} from "./handleRefundFunction.";

const ReturnProduct = () => {
  const dispatch = useDispatch();

  const [refundId, setRefundId] = useState("");
  const [productName, setProductName] = useState("");
  const [returnQuantity, setReturnQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [refundDate, setRefundDate] = useState("");

  const handleRefund = () => {
    const refundData = {
      refundId,
      productName,
      returnQuantity,
      productCategory,
      purchaseDate,
      refundDate,
    };
    handleRefundFunction(refundData, dispatch, setRefundProcessing);
  };

  const handleClear = () => {
    handleClearRefund(
      setRefundId,
      setProductName,
      setReturnQuantity,
      setProductCategory,
      setPurchaseDate,
      setRefundDate
    );
  };

  return (
    <div className="bg-[#383838] text-[#EEEEEE] p-6 rounded-lg w-100 h-150 ">
      <h1 className="text-2xl font-bold mb-3 text-center">Refund Processing</h1>

      {/* Product Details */}
      <div className="mb-4">
        <div className="mb-2">
          <label className="block mb-1">Refund ID:</label>
          <input
            type="text"
            value={refundId}
            onChange={(e) => setRefundId(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
          />
        </div>
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
          <label className="block mb-1">Product Category:</label>
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Purchase Date</label>
          <input
            type="Date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Refund Date:</label>
          <input
            type="Date"
            value={refundDate}
            onChange={(e) => setRefundDate(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
          />
        </div>
      </div>

      {/* Refund Method */}
      <div className="mb-8"></div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleClear}
          className="flex-1 text-[#EEEEE] bg-[#232323] hover:bg-[#8A8A8A] font-semibold py-2 rounded-lg"
        >
          Clear
        </button>
        <button
          onClick={handleRefund}
          className="flex-1 bg-[#FF7171] hover:bg-[#8A8A8A] text-[#EEEEEE] font-semibold py-2 rounded-lg"
        >
          Confirm Refund
        </button>
      </div>
    </div>
  );
};

export default ReturnProduct;
