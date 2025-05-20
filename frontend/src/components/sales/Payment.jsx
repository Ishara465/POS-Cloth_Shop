import React, { useState } from "react";
import { useSelector } from "react-redux";

const Payment = ({ payment }) => {
  const [paidAmount, setPaidAmount] = useState(0);
  const showItems = useSelector((state) => state.addProduct);

  const reCashAmount = (paidAmount, payment) => {
    const total = paidAmount - payment;
    return total;
  };

  return (
    <div className="bg-[#232323] p-3 rounded-lg w-120 h-150">
      {/* Header */}
      <h1 className="text-[#EEEEEE] text-2xl font-bold mb-4">Bill</h1>
      {/* Select Payment Method */}
      <div className="mb-4 justify-between flex ">
        <label className="text-[#EEEEEE] block mb-2">Total Bill</label>
        <label className="text-[#EEEEEE] ">Rs. {payment}</label>
      </div>
      {/* Payment Details */}
      <div className="mb-4">
        <label className="text-[#EEEEEE] block mb-2">Paid Amount</label>
        <input
          type="text"
          placeholder="Enter Payment Details"
          className="w-full p-2 rounded-lg bg-[#383838] text-[#EEEEEE] placeholder-[#8A8A8A]"
          value={paidAmount}
          onChange={(e) => setPaidAmount(e.target.value)}
        />
      </div>
      <div className="justify-between flex">
        <label className="text-[#EEEEEE] block mb-2">ReCash</label>
        <label className="text-[#EEEEEE] block mb-2">
          {reCashAmount(paidAmount, payment)}
        </label>
      </div>

      {/* Hold Current Transaction */}

      {/* Held Transactions */}
      <div className="bg-[#383838] p-4 rounded-lg">
        <h2 className="text-[#EEEEEE] text-xl font-bold mb-4 text-center">
          Items
        </h2>
        <table className="w-full text-left text-[#EEEEEE] border-collapse">
          <thead>
            <tr className="bg-[#383838]">
              <th className="px-4 py-2 border border-[#232323]">
                Product Name
              </th>
              <th className="px-4 py-2 border border-[#232323]">Qty</th>
              <th className="px-4 py-2 border border-[#232323]">Price</th>
            </tr>
          </thead>
          <tbody>
            {showItems.map((item) => (
              <tr key={item.id} className="bg-[#383838]">
                <td className="px-4 py-2 border border-[#232323]">
                  {item.productName}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  {item.quantity}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-3 py-2">
        {/*  Generate Bill */}
        <button className="bg-green-500 px-6 py-2 rounded-lg text-[#EEEEEE] w-full mb-4">
          Generate Bill
        </button>
      </div>
    </div>
  );
};

export default Payment;
