import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import AddItems from "./AddItems";

const InventoryListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleModelClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex bg-[#383838] w-350 h-100 rounded-lg p-4 overflow-hidden flex-col">
      <div className="flex flex-row justify-between   ">
        <h1 className="text-[#EEEEEE] text-xl px-2 font-bold">Inventory</h1>

        <div className="bg-[#232323] rounded-lg flex w-80 h-10 items-center justify-center  ">
          <IoSearch className="text-[#EEEEEE] ml-2 text-xl " />
          <input
            type="text"
            placeholder="Search Items "
            className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
          />
        </div>
        <div className="relative right-0  ">
          <button
            className="text-lg font-bold hover:bg-[#8A8A8A] transition duration-300 ease-in-out rounded-lg bg-[#FF7171] text-[#EEEEEE] px-5 py-2"
            onClick={handleOpenModal}
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-[#383838] w-full rounded-lg p-4 overflow-hidden mt-2">
        <div className="overflow-x-auto  rounded-lg">
          <table className="table-auto w-full text-left text-[#EEEEEE]">
            <thead className="bg-[#232323]">
              <tr>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Brand</th>
                <th className="px-4 py-2">Size</th>
                <th className="px-4 py-2">Color</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#2E2E2E]">
                <td className="px-4 py-2">Shirt</td>
                <td className="px-4 py-2">Men</td>
                <td className="px-4 py-2">Nike</td>
                <td className="px-4 py-2">M</td>
                <td className="px-4 py-2">Blue</td>
                <td className="px-4 py-2">$25</td>
                <td className="px-4 py-2">10</td>
                <td className="px-4 py-2 gap-2 flex ">
                  <button className="text-lg font-bold hover:bg-yellow-300 transition duration-300 ease-in-out rounded-lg bg-yellow-500 text-[#232323] px-2 py-1">
                    Edit
                  </button>
                  <button className="text-lg font-bold hover:bg-red-400 transition duration-300 ease-in-out rounded-lg bg-red-500 text-[#232323] px-2 py-1">
                    Delete
                  </button>
                  <button className="text-lg font-bold hover:bg-green-300 transition duration-300 ease-in-out rounded-lg bg-green-500 text-[#232323] px-2 py-1">
                    Update
                  </button>
                </td>
              </tr>
              <tr className="bg-[#3A3A3A]">
                <td className="px-4 py-2">Pants</td>
                <td className="px-4 py-2">Women</td>
                <td className="px-4 py-2">Adidas</td>
                <td className="px-4 py-2">L</td>
                <td className="px-4 py-2">Black</td>
                <td className="px-4 py-2">$30</td>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline mr-2">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-[#2E2E2E]">
                <td className="px-4 py-2">Dress</td>
                <td className="px-4 py-2">Kids</td>
                <td className="px-4 py-2">Zara</td>
                <td className="px-4 py-2">S</td>
                <td className="px-4 py-2">Red</td>
                <td className="px-4 py-2">$40</td>
                <td className="px-4 py-2">8</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline mr-2">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && <AddItems setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default InventoryListPage;
