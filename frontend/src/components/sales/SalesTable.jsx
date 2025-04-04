import React, { useState } from "react";

const SalesTable = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Shirt", qty: 2, price: 50 },
    { id: 2, name: "Pants", qty: 1, price: 30 },
  ]);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit functionality for product ID: ${id}`);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.qty * item.price, 0);
  };

  const tax = calculateTotal() * 0.1; // 10% tax
  const finalAmount = calculateTotal() + tax;

  return (
    <div className="bg-[#232323] p-6 rounded-lg w-140">
      {/* Header */}
      <h1 className="text-[#EEEEEE] text-2xl font-bold mb-4">
        Sales and Billing
      </h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search or scan products..."
          className="w-full p-2 rounded-lg bg-[#383838] text-[#EEEEEE] placeholder-[#8A8A8A]"
        />
      </div>

      {/* Cart Table */}
      <table className="w-full text-left text-[#EEEEEE] border-collapse">
        <thead>
          <tr className="bg-[#383838]">
            <th className="px-4 py-2 border border-[#232323]">Product Name</th>
            <th className="px-4 py-2 border border-[#232323]">Qty</th>
            <th className="px-4 py-2 border border-[#232323]">Price</th>
            <th className="px-4 py-2 border border-[#232323]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="bg-[#383838]">
              <td className="px-4 py-2 border border-[#232323]">{item.name}</td>
              <td className="px-4 py-2 border border-[#232323]">{item.qty}</td>
              <td className="px-4 py-2 border border-[#232323]">
                ${item.price * item.qty}
              </td>
              <td className="px-4 py-2 border border-[#232323]">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="bg-blue-500 px-3 py-1 rounded-lg mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 px-3 py-1 rounded-lg"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary Section */}
      <div className="mt-6 text-[#EEEEEE]">
        <div className="flex justify-between mb-2">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax (10%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Final Amount:</span>
          <span>${finalAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="bg-green-500 px-6 py-2 rounded-lg text-[#EEEEEE]">
          Checkout
        </button>
        <button className="bg-yellow-500 px-6 py-2 rounded-lg text-[#232323]">
          Hold Transaction
        </button>
      </div>
    </div>
  );
};

export default SalesTable;
