import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeSupplier } from "../../redux/slices/supplier.js";
import toast from "react-hot-toast";
import UpdateSupplier from "./updateSupplier.jsx";

const SupplierTable = () => {
  const supplier = useSelector((state) => state.supplier);
  const dispatch = useDispatch();

  const [isModelOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete this supplier ?")) {
      dispatch(removeSupplier(id));
      toast.success("Item deleted successfully!");
    }
  };

  const handleOpenModelUpdate = (supplier) => {
    setIsModalOpen(true);
    setSelectedProduct(supplier);
  };

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
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {supplier.map((supplier, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#383838]" : "bg-[#2C2C2C]"
                }`}
              >
                <td className="px-4 py-2">{supplier.id}</td>
                <td className="px-4 py-2">{supplier.name}</td>
                <td className="px-4 py-2">{supplier.phone}</td>
                <td className="px-4 py-2">{supplier.email}</td>
                <td className="px-4 py-2 gap-2 flex items-center">
                  <button
                    className="text-[15px] font-semibold hover:bg-[#FF8A8A] transition duration-300 ease-in-out rounded-lg bg-[#FF7171] text-white px-2 py-1"
                    onClick={() => handleDelete(supplier.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-[15px] font-semibold hover:bg-[#5A5A5A] transition duration-300 ease-in-out rounded-lg bg-[#8A8A8A] text-white px-2 py-1"
                    onClick={() => handleOpenModelUpdate(supplier)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModelOpen && (
        <UpdateSupplier
          setIsModalOpen={setIsModalOpen}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
};

export default SupplierTable;
