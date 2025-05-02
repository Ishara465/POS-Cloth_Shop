import React from "react";
import { useSelector } from "react-redux";

const ReturnProductTable = () => {
  const returnProducts = useSelector((state) => state.refundProcessing);
  return (
    <div className="border rounded-lg p-4 bg-[#232323] w-155 items-center justify-center">
      <h1 className="text-[#EEEEEE] mb-8 mt-2 text-2xl font-bold ">
        Return Products
      </h1>
      {/* Table */}
      <table className="table-auto w-10 text-left text-[#EEEEEE] border-collapse border-2 border-[#383838]">
        <thead className="bg-[#232323] text-[#EEEEEE]">
          <tr>
            <th className="px-4 py-2 border border-[#383838]">Product Name</th>
            <th className="px-4 py-2 border border-[#383838]">Category</th>
            <th className="px-4 py-2 border border-[#383838]">Quantity</th>
            <th className="px-4 py-2 border border-[#383838]">Refund Date</th>
            <th className="px-4 py-2 border border-[#383838]">Purchase Date</th>
            <th className="px-4 py-2 border border-[#383838]">Status</th>
          </tr>
        </thead>
        <tbody>
          {returnProducts.map((item, index) => {
            return (
              <tr
                className={`${index % 2 === 0 ? "bg-[#383838]" : "bg-[#2C2C2C]"}
            
            `}
                key={index}
              >
                <td className="px-4 py-2 border border-[#232323]">
                  {item.productName}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  {item.productCategory}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  {item.returnQuantity}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  {item.purchaseDate}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  {item.refundDate}
                </td>
                <td className="px-4 py-2 border border-[#232323]">
                  <button className="bg-red-600 px-3 p-1 rounded-lg">
                    Return
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnProductTable;
