import React from "react";

const ReturnProductTable = () => {
  return (
    <div className="border rounded-lg p-4 bg-[#232323] w-150 items-center justify-center">
      <h1 className="text-[#EEEEEE] mb-8 mt-2 text-2xl font-bold ">
        Return Products
      </h1>
      {/* Table */}
      <table className="table-auto w-10 text-left text-[#EEEEEE] border-collapse border-2 border-[#383838]">
        <thead className="bg-[#232323] text-[#EEEEEE]">
          <tr>
            <th className="px-4 py-2 border border-[#383838]">Product Name</th>
            <th className="px-4 py-2 border border-[#383838]">Category</th>
            <th className="px-4 py-2 border border-[#383838]">Price</th>
            <th className="px-4 py-2 border border-[#383838]">Payment</th>
            <th className="px-4 py-2 border border-[#383838]">Date</th>
            <th className="px-4 py-2 border border-[#383838]">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#383838]">
            <td className="px-4 py-2 border border-[#232323]">T-Shirt</td>
            <td className="px-4 py-2 border border-[#232323]">Clothing</td>
            <td className="px-4 py-2 border border-[#232323]">$20</td>
            <td className="px-4 py-2 border border-[#232323]">50</td>
            <td className="px-4 py-2 border border-[#232323]">2500</td>
            <td className="px-4 py-2 border border-[#232323]">
              <button className="bg-red-600 px-3 p-1 rounded-lg">Return</button>
            </td>
          </tr>
          <tr className="bg-[#383838]">
            <td className="px-4 py-2 border border-[#232323]">Jeans</td>
            <td className="px-4 py-2 border border-[#232323]">Clothing</td>
            <td className="px-4 py-2 border border-[#232323]">$40</td>
            <td className="px-4 py-2 border border-[#232323]">30</td>
            <td className="px-4 py-2 border border-[#232323]">266</td>
            <td className="px-4 py-2 border border-[#232323]">
              <button className="bg-red-600 px-3 p-1 rounded-lg">Return</button>
            </td>
          </tr>
          <tr className="bg-[#383838]">
            <td className="px-4 py-2 border border-[#232323]">Jacket</td>
            <td className="px-4 py-2 border border-[#232323]">Outerwear</td>
            <td className="px-4 py-2 border border-[#232323]">$60</td>
            <td className="px-4 py-2 border border-[#232323]">20</td>
            <td className="px-4 py-2 border border-[#232323]">6000</td>
            <td className="px-4 py-2 border border-[#232323]">
              <button className="bg-red-600 px-3 p-1 rounded-lg">Return</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReturnProductTable;
