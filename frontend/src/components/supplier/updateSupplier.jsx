import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateSupplier } from "../../redux/slices/supplier";

const UpdateSupplier = ({ setIsModalOpen, selectedProduct }) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdateSupplier = () => {
    if (isNaN(phone)) {
      toast.error("Phone number should be a number");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    dispatch(
      updateSupplier({
        id,
        name,
        phone,
        email,
      })
    );
    toast.success("Supplier updated successfully");
    handleClear();
    setIsModalOpen(false);
  };

  const handleClear = () => {
    setId("");
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("Selected Product", selectedProduct);
    if (selectedProduct) {
      setId(selectedProduct.id || "");
      setName(selectedProduct.name || "");
      setPhone(selectedProduct.phone || "");
      setEmail(selectedProduct.email || "");
    }
  }, [selectedProduct]);

  return (
    <div className="fixed inset-0 bg-[#232323] flex items-center justify-center z-50 modal-backdrop">
      <div className="bg-[#383838] rounded-lg p-6 w-96 border-1 hover:border-[#FF7171] border-[#EEEEEE] transition duration-300 ease-in-out hover:shadow-[0_0_15px_#FF7171]">
        <h2 className="text-xl text-[#EEEEEE] font-bold mb-4">
          Update Supplier
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
              Supplier ID
            </label>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
              Supplier Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
              Phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleUpdateSupplier}
            className="bg-[#FF7171] text-white px-4 py-2 rounded-lg hover:bg-[#FF8A8A] transition duration-300 ease-in-out"
          >
            Update Supplier
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateSupplier;
