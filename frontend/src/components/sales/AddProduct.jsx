import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAddProduct } from "../../redux/slices/sales/AddProducts";

const AddProduct = ({ setIsModalOpen }) => {
  // Define state variables
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (!productId || !productName || !quantity || !price) {
      toast.error("All fields are required!");
      return;
    }

    if (isNaN(quantity) || isNaN(price)) {
      toast.error("Quantity and Price must be numbers!");
      return;
    }

    dispatch(
      setAddProduct({
        productId,
        productName,
        quantity,
        price,
      })
    );

    // Clear the form after adding the product
    handleClear();
    setIsModalOpen(false);
  };

  const handleClear = () => {
    setProductId("");
    setProductName("");
    setQuantity("");
    setPrice("");
  };

  const handleCloseModal = () => {
    // Logic to close the modal
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-[#232323] flex items-center justify-center z-50 modal-backdrop">
      <div className="bg-[#383838] rounded-lg p-6 w-96 border-1 hover:border-[#FF7171] border-[#EEEEEE] transition duration-300 ease-in-out hover:shadow-[0_0_15px_#FF7171]">
        <h2 className="text-xl text-[#EEEEEE] font-bold mb-4">
          Add New Product
        </h2>
        <div className=" gap-4 mb-4">
          <div className="mb-4">
            <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
              Product ID
            </label>
            <input
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
            />
          </div>

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
              Quantity
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
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleCloseModal}
            className="bg-[#8A8A8A] text-white px-4 py-2 rounded-lg mr-2 hover:bg-[#5A5A5A] transition duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={handleAddProduct}
            className="bg-[#FF7171] text-white px-4 py-2 rounded-lg hover:bg-[#FF8A8A] transition duration-300 ease-in-out"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
