import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import AddItems from "./AddItems";
import { useDispatch, useSelector } from "react-redux";
import { removeInventory } from "../../redux/slices/inventorySlice";
import UpdateInventory from "./UpdateInventory";
import toast from "react-hot-toast";

const InventoryListPage = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenModalUpdate = (item) => {
    setIsModalOpenUpdate(true);
    setSelectedProduct(item);
  };

  const handleDelete = (productCode) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(removeInventory(productCode));
      toast.success("Item deleted successfully!");
    }
  };

  return (
    <div className="flex bg-[#383838] w-350 h-100 rounded-lg p-4 overflow-hidden flex-col">
      <div className="flex flex-row justify-between">
        <h1 className="text-[#EEEEEE] text-xl px-2 font-bold">Inventory</h1>

        <div className="bg-[#232323] rounded-lg flex w-80 h-10 items-center justify-center">
          <IoSearch className="text-[#EEEEEE] ml-2 text-xl" />
          <input
            type="text"
            placeholder="Search Items"
            className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
          />
        </div>
        <div className="relative right-0">
          <button
            className="text-lg font-bold hover:bg-[#FF8A8A] transition duration-300 ease-in-out rounded-lg bg-[#FF7171] text-[#EEEEEE] px-5 py-2"
            onClick={handleOpenModal}
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-[#383838] w-full rounded-lg p-4 overflow-hidden mt-2">
        <div className="overflow-x-auto rounded-lg">
          <table className="table-auto w-full text-left text-[#EEEEEE]">
            <thead className="bg-[#232323]">
              <tr>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Brand</th>
                <th className="px-4 py-2">Size</th>
                <th className="px-4 py-2">Color</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Product Code</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows */}
              {inventory.map((item, index) => (
                <tr key={index} className="bg-[#2E2E2E]">
                  <td className="px-4 py-2">{item.productName}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.brand}</td>
                  <td className="px-4 py-2">{item.size}</td>
                  <td className="px-4 py-2">{item.color}</td>
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">{item.productCode}</td>
                  <td className="px-4 py-2 gap-2 flex">
                    <button
                      onClick={() => handleDelete(item.productCode)}
                      className="text-lg font-semibold hover:bg-[#FF8A8A] transition duration-300 ease-in-out rounded-lg bg-[#FF7171] text-[#EEEEEE] px-2 py-1"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleOpenModalUpdate(item)}
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

      {isModalOpen && <AddItems setIsModalOpen={setIsModalOpen} />}
      {isModalOpenUpdate && (
        <UpdateInventory
          setIsModalOpenUpdate={setIsModalOpenUpdate}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
};

export default InventoryListPage;
