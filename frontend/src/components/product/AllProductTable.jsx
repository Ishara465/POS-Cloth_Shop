import React from "react";
import { useSelector } from "react-redux";

const AllProductTable = () => {
  const inventory = useSelector((state) => state.inventory);
  return (
    <div className="border rounded-lg p-4 bg-[#232323] w-150 items-center justify-center">
      <h1 className="text-[#EEEEEE] mb-8 mt-2 text-2xl font-bold ">Products</h1>
      {/* Table */}
      <table className="table-auto w-10 text-left text-[#EEEEEE] border-collapse border-2 border-[#383838]">
        <thead className="bg-[#232323] text-[#EEEEEE]">
          <tr>
            <th className="px-4 py-2 border border-[#383838]">Product Name</th>
            <th className="px-4 py-2 border border-[#383838]">Category</th>
            <th className="px-4 py-2 border border-[#383838]">Price</th>
            <th className="px-4 py-2 border border-[#383838]">Stock</th>
            <th className="px-4 py-2 border border-[#383838]">Payment</th>
            <th className="px-4 py-2 border border-[#383838]">Status</th>
          </tr>
        </thead>
        {inventory.map((item, index) => (
          <tbody>
            <tr className="bg-[#383838] " key={index}>
              <td className="px-4 py-2 border border-[#232323]">
                {item.productName}
              </td>
              <td className="px-4 py-2 border border-[#232323]">
                {item.category}
              </td>
              <td className="px-4 py-2 border border-[#232323]">
                {item.price}
              </td>
              <td className="px-4 py-2 border border-[#232323]">
                {item.quantity}
              </td>
              <td className="px-4 py-2 border border-[#232323]"></td>
              <td className="px-4 py-2 border border-[#232323]">
                <button className="bg-green-500 px-3 p-1 rounded-lg">
                  Pay
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllProductTable;
