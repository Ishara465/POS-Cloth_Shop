import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeCustomer } from "../../redux/slices/customerSlice.js";
import UpdateCustomer from "./updateCustomer";

const CustomerTable = () => {
  const customers = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const [isModelOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleUpdateModel = (item) => {
    setIsModalOpen(true);
    setSelectedCustomer(item);
  };

  const handleDelete = (code) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(removeCustomer(code)); // Dispatch the action with the customer id
    }
  };

  return (
    <div className="bg-[#383838] p-4 h-auto w-300 rounded-lg  overflow-hidden flex flex-col ">
      <div className="flex justify-between px-10 py-5">
        <h1 className="text-[#EEEEEE] text-xl font-bold">Customer</h1>

        <div className="bg-[#232323] rounded-lg flex w-80 h-10 items-center justify-center  ">
          <IoSearch className="text-[#EEEEEE] ml-2 text-xl " />
          <input
            type="text"
            placeholder="Search Items "
            className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="px-5  ">
        <div className="overflow-y-auto h-96 scrollbar rounded-lg">
          <table className="w-full text-left text-[#EEEEEE] border-collapse ">
            <thead className="sticky top-0 z-10">
              <tr className="bg-[#232323]">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Customer Code</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#383838]" : "bg-[#2C2C2C]"
                  }`}
                >
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.phone}</td>
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">{item.code}</td>
                  <td className="px-4 py-2 gap-2 flex items-center">
                    <button
                      onClick={() => handleDelete(item.code)}
                      className="text-lg font-semibold hover:bg-[#FF8A8A] transition duration-300 ease-in-out rounded-lg bg-[#FF7171] text-[#EEEEEE] px-2 py-1"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleUpdateModel(item)}
                      className="text-lg font-semibold hover:bg-[#3A3A3A] transition duration-300 ease-in-out rounded-lg bg-[#232323] text-[#EEEEE] px-2 py-1"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Update Customer */}
      {isModelOpen && (
        <UpdateCustomer
          setIsModalOpen={setIsModalOpen}
          selectedCustomer={selectedCustomer}
        />
      )}
    </div>
  );
};

export default CustomerTable;
