import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setReturnAndRefund } from "../../redux/slices/return/returnAndRefundSlice";

const ReturnsRefunds = () => {
  const dispatch = useDispatch();

  const [receiptNumber, setReceiptNumber] = useState("");
  const [productName, setProductName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [returnQuantity, setReturnQuantity] = useState(1);
  const [reason, setReason] = useState("");
  const [refundAmount, setRefundAmount] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);

  const handleRefund = () => {
    if (
      !receiptNumber ||
      !productName ||
      !customerName ||
      !returnQuantity ||
      !reason ||
      !refundAmount
    ) {
      toast.error("Please fill all fields");
      return;
    }
    if (returnQuantity <= 0) {
      toast.error("Return quantity must be greater than 0");
      return;
    }
    if (refundAmount <= 0) {
      toast.error("Refund amount must be greater than 0");
      return;
    }
    if (originalPrice <= 0) {
      toast.error("Original price must be greater than 0");
      return;
    }
    if (refundAmount > originalPrice) {
      toast.error("Refund amount cannot be greater than original price");
      return;
    }
    if (isNaN(refundAmount)) {
      toast.error("Refund amount must be a number");
      return;
    }
    if (isNaN(returnQuantity)) {
      toast.error("Return quantity must be a number");
      return;
    }
    if (isNaN(originalPrice)) {
      toast.error("Original price must be a number");
      return;
    }

    dispatch(
      setReturnAndRefund({
        receiptNumber,
        productName,
        customerName,
        returnQuantity,
        reason,
        refundAmount,
        originalPrice,
      })
    );
    toast.success("Refund processed successfully!");
  };

  const handleClear = () => {
    setReceiptNumber("");
    setProductName("");
    setCustomerName("");
    setReturnQuantity(1);
    setReason("");
    setRefundAmount(0);
    setOriginalPrice(0);
  };

  return (
    <div className="bg-[#383838] text-[#EEEEEE] px-5 py-5 rounded-lg w-100 h-150 flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-2 text-center">Returns & Refunds</h1>

      {/* Search Bar */}
      <div className="">
        <input
          // value={receiptNumber}
          // onChange={(e) => setReceiptNumber(e.target.value)}
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
              value={receiptNumber}
              onChange={(e) => setReceiptNumber(e.target.value)}
              type="text"
              placeholder="Enter Receipt Number"
              className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Customer Name:</label>
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              type="text"
              placeholder="Enter Customer Name"
              className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Original Price</label>
            <input
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              type="text"
              placeholder="Rs.500"
              className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="mb-4">
          <div className="mb-4">
            <label className="block mb-2">Product Name:</label>
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              placeholder="Enter Product Name"
              className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Return Quantity:</label>
            <input
              value={returnQuantity}
              onChange={(e) => setReturnQuantity(e.target.value)}
              type="number"
              placeholder="Enter Quantity"
              className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Refund Amount</label>
            <input
              value={refundAmount}
              onChange={(e) => setRefundAmount(e.target.value)}
              type="text"
              placeholder="Rs.495"
              className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mb-4 w-full h-20">
        <label className="block mb-2">Reason for Return:</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter Reason"
          className="w-full p-2 rounded-lg bg-[#232323] text-[#8A8A8A] outline-none"
          rows="3"
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="flex mt-10 gap-4">
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

export default ReturnsRefunds;
