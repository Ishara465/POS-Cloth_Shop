import React, { useState } from "react";

const Payment = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Shirt", qty: 2, price: 25, dis: 5 },
    { id: 2, name: "Pants", qty: 1, price: 30, dis: 3 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState(""); // Selected payment method
  const [heldTransactions, setHeldTransactions] = useState([
    { id: "001", date: "2025-04-01", amount: 88 },
    { id: "002", date: "2025-04-02", amount: 45 },
  ]);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.qty * item.price, 0);
  };

  const handleHoldTransaction = () => {
    const newTransaction = {
      id: String(heldTransactions.length + 1).padStart(3, "0"),
      date: new Date().toISOString().split("T")[0],
      amount: calculateSubtotal(),
    };
    setHeldTransactions([...heldTransactions, newTransaction]);
  };

  const handleResumeTransaction = (id) => {
    alert(`Resuming transaction ID: ${id}`);
  };

  return (
    <div className="bg-[#232323] p-3 rounded-lg w-120 h-150">
      {/* Header */}
      <h1 className="text-[#EEEEEE] text-2xl font-bold mb-4">
        Payment Methods
      </h1>

      {/* Select Payment Method */}
      <div className="mb-4">
        <label className="text-[#EEEEEE] block mb-2">
          Select Payment Method:
        </label>
        <div className="flex gap-4">
          <button
            onClick={() => setPaymentMethod("Cash")}
            className={`px-4 py-2 rounded-lg ${
              paymentMethod === "Cash" ? "bg-green-500" : "bg-[#383838]"
            } text-[#EEEEEE]`}
          >
            Cash
          </button>
          <button
            onClick={() => setPaymentMethod("Card")}
            className={`px-4 py-2 rounded-lg ${
              paymentMethod === "Card" ? "bg-green-500" : "bg-[#383838]"
            } text-[#EEEEEE]`}
          >
            Credit/Debit Card
          </button>
          <button
            onClick={() => setPaymentMethod("Wallet")}
            className={`px-4 py-2 rounded-lg ${
              paymentMethod === "Wallet" ? "bg-green-500" : "bg-[#383838]"
            } text-[#EEEEEE]`}
          >
            Digital Wallet
          </button>
        </div>
      </div>

      {/* Payment Details */}
      <div className="mb-4">
        <label className="text-[#EEEEEE] block mb-2">Payment Details:</label>
        <input
          type="text"
          placeholder="Enter Payment Details"
          className="w-full p-2 rounded-lg bg-[#383838] text-[#EEEEEE] placeholder-[#8A8A8A]"
        />
      </div>

      {/* Complete Payment Button */}
      <button className="bg-green-500 px-6 py-2 rounded-lg text-[#EEEEEE] w-full mb-4">
        Complete Payment
      </button>

      {/* Hold Current Transaction */}
      <button
        onClick={handleHoldTransaction}
        className="bg-yellow-500 px-6 py-2 rounded-lg text-[#232323] w-full mb-4"
      >
        Hold Current Transaction
      </button>

      {/* Held Transactions */}
      <div className="bg-[#383838] p-4 rounded-lg">
        <h2 className="text-[#EEEEEE] text-xl font-bold mb-4">
          Held Transactions
        </h2>
        <table className="w-full text-left text-[#EEEEEE] border-collapse">
          <thead>
            <tr className="bg-[#383838]">
              <th className="px-4 py-2 border border-[#232323]">
                Transaction ID
              </th>
              <th className="px-4 py-2 border border-[#232323]">Date</th>
              <th className="px-4 py-2 border border-[#232323]">Amount</th>
              <th className="px-4 py-2 border border-[#232323]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {heldTransactions.map((transaction) => (
              <tr key={transaction.id} className="bg-[#383838]">
                <td className="px-4 py-2 border border-[#232323]">
                  {transaction.id}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  {transaction.date}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  ${transaction.amount.toFixed(2)}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  <button
                    onClick={() => handleResumeTransaction(transaction.id)}
                    className="bg-blue-500 px-3 py-1 rounded-lg"
                  >
                    Resume
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
