import React, { useState } from "react";

const SalesTable = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Shirt", qty: 2, price: 25, dis: 5 },
    { id: 2, name: "Pants", qty: 1, price: 30, dis: 3 },
  ]);
  const [discount, setDiscount] = useState(0); // Discount in percentage
  const [promotion, setPromotion] = useState(""); // Selected promotion

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.qty * item.price, 0);
  };

  const calculateFinalAmount = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = (subtotal * discount) / 100;
    return subtotal - discountAmount;
  };

  return (
    <div className="bg-[#232323] p-6 rounded-lg w-130">
      {/* Header */}
      <h1 className="text-[#EEEEEE] text-2xl font-bold mb-4">Discount</h1>

      {/* Discounts & Promotions Section */}
      <div className="bg-[#383838] p-4 rounded-lg">
        <h2 className="text-[#EEEEEE] text-xl font-bold mb-4">
          Discounts & Promotions
        </h2>

        {/* Subtotal */}
        <div className="flex justify-between mb-4">
          <span className="text-[#EEEEEE]">Subtotal:</span>
          <span className="text-[#EEEEEE]">
            ${calculateSubtotal().toFixed(2)}
          </span>
        </div>

        {/* Discount Input */}
        <div className="flex justify-between items-center mb-4">
          <label className="text-[#EEEEEE]">Discount (%):</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-20 p-2 rounded-lg bg-[#232323] text-[#EEEEEE] text-right"
          />
        </div>

        {/* Final Amount */}
        <div className="flex justify-between mb-4">
          <span className="text-[#EEEEEE] font-bold">Final Amount:</span>
          <span className="text-[#EEEEEE] font-bold">
            ${calculateFinalAmount().toFixed(2)}
          </span>
        </div>

        {/* Promotion Dropdown */}
        <div className="flex justify-between items-center mb-4">
          <label className="text-[#EEEEEE]">Promotion:</label>
          <select
            value={promotion}
            onChange={(e) => setPromotion(e.target.value)}
            className="w-40 p-2 rounded-lg bg-[#232323] text-[#EEEEEE]"
          >
            <option value="">Select Promotion</option>
            <option value="promo1">Promo 1</option>
            <option value="promo2">Promo 2</option>
            <option value="promo3">Promo 3</option>
          </select>
        </div>

        {/* Apply Discount Button */}
        <button className="bg-green-500 px-6 py-2 rounded-lg text-[#EEEEEE] w-full">
          Apply Discount
        </button>

        {/* Cart Table */}
        <table className="w-full text-left text-[#EEEEEE] border-collapse mt-5">
          <thead>
            <tr className="bg-[#383838]">
              <th className="px-4 py-2 border border-[#232323]">
                Product Name
              </th>
              <th className="px-4 py-2 border border-[#232323]">Qty</th>
              <th className="px-4 py-2 border border-[#232323]">Discount</th>
              <th className="px-4 py-2 border border-[#232323]">Price</th>
              <th className="px-4 py-2 border border-[#232323]">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="bg-[#383838]">
                <td className="px-4 py-2 border border-[#232323]">
                  {item.name}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  {item.qty}
                </td>

                <td className="px-4 py-2 border border-[#232323]">
                  ${item.dis}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  ${item.price}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  ${item.price * item.qty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;
