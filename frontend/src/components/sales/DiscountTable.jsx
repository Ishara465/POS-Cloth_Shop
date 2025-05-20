import React, { useState } from "react";

const DiscountTable = ({ finalAmount, paymentFunc }) => {
  const [discount, setDiscount] = useState(0); // Discount in percentage

  // Calculate the subtotal (from the passed finalAmount)
  const calculateSubtotal = () => {
    return Number(finalAmount) || 0;
  };

  // Calculate the final amount after applying discount
  const calculateFinalAmount = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = (subtotal * Number(discount)) / 100;
    return subtotal - discountAmount;
  };

  return (
    <div className="bg-[#232323] p-6 rounded-lg w-130">
      {/* Header */}
      <h1 className="text-[#EEEEEE] text-2xl font-bold mb-4">Discount</h1>

      {/* Discounts & Promotions Section */}
      <div className="bg-[#383838] p-4 rounded-lg">
        {/* Subtotal */}
        <div className="flex justify-between mb-4">
          <span className="text-[#EEEEEE]">Subtotal</span>
          <span className="text-[#EEEEEE]">
            ${calculateSubtotal().toFixed(2)}
          </span>
        </div>

        {/* Discount Input */}
        <div className="flex justify-between items-center mb-4">
          <label className="text-[#EEEEEE]">Discount (%):</label>
          <input
            type="number"
            min="0"
            max="100"
            value={discount}
            onChange={(e) =>
              setDiscount(e.target.value.replace(/^0+/, "") || 0)
            }
            className="w-20 p-2 rounded-lg bg-[#232323] text-[#EEEEEE] text-right"
          />
        </div>

        {/* Cart Table */}
        <table className="w-full text-left text-[#EEEEEE] border-collapse mt-5">
          <thead>
            <tr className="bg-[#383838]">
              <th className="px-4 py-2 border border-[#232323]">
                All Products
              </th>
              <th className="px-4 py-2 border border-[#232323]">
                Discount Without Price
              </th>
              <th className="px-4 py-2 border border-[#232323]">
                Item Discount
              </th>
              <th className="px-4 py-2 border border-[#232323]">
                Discount With Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#383838]">
              <td className="px-4 py-2 border border-[#232323]">All Items</td>
              <td className="px-4 py-2 border border-[#232323]">
                ${calculateSubtotal().toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-[#232323]">{discount}%</td>
              <td className="px-4 py-2 border border-[#232323]">
                ${calculateFinalAmount().toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        {/* Apply Discount Button */}
        <button
          className="bg-green-500 px-6 py-2 rounded-lg text-[#EEEEEE] w-full"
          onClick={() => paymentFunc(calculateFinalAmount)}
        >
          Payment
        </button>
      </div>
    </div>
  );
};

export default DiscountTable;
