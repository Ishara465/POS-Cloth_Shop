import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInventory } from "../../redux/slices/inventorySlice.js";
import toast from "react-hot-toast";

const AddItems = ({ setIsModalOpen }) => {
  //   if (setIsModalOpen) return null;

  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productCode, setProductCode] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddItems = () => {
    if (
      !productName ||
      !category ||
      !brand ||
      !size ||
      !color ||
      !price ||
      !quantity ||
      !productCode
    ) {
      toast.error("All fields are required!");
      return;
    }
    if ((price && isNaN(price)) || (quantity && isNaN(quantity))) {
      toast.error("Price and Quantity should be numbers!");
      return;
    }

    if (!/^[A-Za-z0-9]+$/.test(productCode)) {
      toast.error("Code should contain only alphanumeric characters!");
      return;
    }

    dispatch(
      setInventory({
        productName,
        category,
        brand,
        size,
        color,
        price,
        quantity,
        productCode,
      })
    );
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-[#232323]  flex items-center justify-center z-50 modal-backdrop ">
      <div className="bg-[#383838] rounded-lg p-6 w-96 border-1 hover:border-[#FF7171] border-[#EEEEEE] transition duration-300 ease-in-out hover:shadow-[0_0_15px_#FF7171]">
        <h2 className="text-xl text-[#EEEEEE] font-bold mb-4">
          Add New Product
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <div className="mb-4">
              <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                Product Name
              </label>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                Category
              </label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                Brand
              </label>
              <input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                Size
              </label>
              <input
                value={size}
                onChange={(e) => setSize(e.target.value)}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-4">
              <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                Color
              </label>
              <input
                value={color}
                onChange={(e) => setColor(e.target.value)}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                Price
              </label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                Stock Qty
              </label>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                product Code
              </label>
              <input
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-[#232323] text-white px-6 py-2 rounded-lg mr-2 hover:bg-[#3A3A3A]  transition duration-300 ease-in-out"
          >
            Generate Barcode
          </button>
          <button
            type="button"
            onClick={handleCloseModal}
            className="bg-[#8A8A8A] text-white px-4 py-2 rounded-lg mr-2 hover:bg-[#5A5A5A] transition duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={handleAddItems}
            className="bg-[#FF7171] text-white px-4 py-2 rounded-lg hover:bg-[#FF8A8A] transition duration-300 ease-in-out"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
