import React from "react";
import { IoSearch } from "react-icons/io5";

const SupplierTable = () => {
  const customers = [
    { name: "John Doe", phone: "123-456-7890", email: "john@example.com" },
    { name: "Jane Smith", phone: "098-765-4321", email: "jane@example.com" },
  ];

  return (
    <div className="bg-[#383838] h-70 w-300 rounded-lg  overflow-hidden flex flex-col">
      <div className="flex justify-between px-10 py-5">
        <h1 className="text-[#EEEEEE] text-xl font-bold">Supplier</h1>

        <div className="bg-[#232323] rounded-lg flex w-80 h-10 items-center justify-center  ">
          <IoSearch className="text-[#EEEEEE] ml-2 text-xl " />
          <input
            type="text"
            placeholder="Search Supplier"
            className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="px-5">
        <table className="w-full text-left text-[#EEEEEE] border-collapse">
          <thead>
            <tr className="bg-[#232323]">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#383838]" : "bg-[#2C2C2C]"
                }`}
              >
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.phone}</td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2 gap-2 flex items-center">
                  <button className="text-[15px] font-semibold  hover:bg-yellow-300 transition duration-300 ease-in-out rounded-lg bg-yellow-500 text-[#232323] px-2 py-1">
                    Edit
                  </button>
                  <button className="text-[15px] font-semibold hover:bg-red-400 transition duration-300 ease-in-out rounded-lg bg-red-500 text-[#232323] px-2 py-1">
                    Delete
                  </button>
                  <button className="text-[15px] font-semibold hover:bg-green-300 transition duration-300 ease-in-out rounded-lg bg-green-500 text-[#232323] px-2 py-1">
                    Update
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

export default SupplierTable;
