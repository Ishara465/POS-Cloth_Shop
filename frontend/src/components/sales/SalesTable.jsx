import React, { useState } from "react";
import AddProduct from "./AddProduct";
import { LuScanBarcode } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { removeProduct } from "../../redux/slices/sales/AddProducts";
import DiscountTable from "./DiscountTable";

const SalesTable = ({ onCheckout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addProducts = useSelector((state) => state.addProduct);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleRemove = (productId) => {
    if (window.confirm("Are you sure you want to remove this item ?")) {
      dispatch(removeProduct(productId));
      toast.success("Item remove successfully");
    }
  };

  const handleEdit = (productId) => {
    alert(`Edit functionality for product ID: ${productId}`);
  };

  const calculateTotal = () => {
    return addProducts.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
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
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search or scan products..."
          className="w-90 p-2 rounded-lg bg-[#383838] text-[#EEEEEE] placeholder-[#8A8A8A]"
        />
        <div className="border-2 border-white p-1 rounded-lg bg-[#383838] hover:bg-[#232323] hover:border-[#FF7171] hover:ease-in-out transition duration-300">
          <LuScanBarcode className="text-2xl text-white" />
        </div>
        <button
          className="text-lg font-bold hover:bg-[#FF8A8A] transition duration-300 ease-in-out rounded-lg bg-[#FF7171] text-[#EEEEEE] px-3 py-1 ml-2 "
          onClick={handleModalOpen}
        >
          Add
        </button>
      </div>

      {/* Cart Table */}
      <div className="overflow-auto max-h-80 scrollbar">
        <table className="w-full h-full text-left text-[#EEEEEE] border-collapse ">
          <thead>
            <tr className="bg-[#383838]">
              <th className="px-4 py-2 border border-[#232323]">
                Product Name
              </th>
              <th className="px-4 py-2 border border-[#232323]">Qty</th>
              <th className="px-4 py-2 border border-[#232323]">Price</th>
              <th className="px-4 py-2 border border-[#232323]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {addProducts.map((addProduct) => (
              <tr key={addProduct.productId} className="bg-[#383838]">
                <td className="px-4 py-2 border border-[#232323]">
                  {addProduct.productName}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  {addProduct.quantity}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  Rs. {addProduct.price * addProduct.quantity}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  <button
                    onClick={() => handleEdit(addProduct.productId)}
                    className="bg-blue-500 px-3 py-1 rounded-lg mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemove(addProduct.productId)}
                    className="bg-red-500 px-3 py-1 rounded-lg"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
        <button
          className="bg-green-500 px-6 py-2 rounded-lg text-[#EEEEEE]"
          onClick={() => onCheckout(finalAmount)}
        >
          Checkout
        </button>
        <button className="bg-yellow-500 px-6 py-2 rounded-lg text-[#232323]">
          Hold Transaction
        </button>
      </div>
      {isModalOpen && <AddProduct setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default SalesTable;
