import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCustomer } from "../../redux/slices/customerSlice";
import toast from "react-hot-toast";

const UpdateCustomer = ({ selectedCustomer, setIsModalOpen }) => {
  const dispatch = useDispatch();

  // Initialize state variables for form inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  // Handle Save button click
  const handleUpdate = () => {
    if (!/^\d+$/.test(phone)) {
      toast.error("Phone number should contain only digits!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email format!");
      return;
    }

    dispatch(
      updateCustomer({
        name,
        phone,
        email,
        code,
      })
    );

    dispatch(updateCustomer(updateCustomer));
    setIsModalOpen(false); // Close the modal after saving
    toast.success("Customer updated successfully!");
  };

  // Handle Close button click
  const handleClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  // Pre-fill the form fields when `selectedCustomer` changes
  useEffect(() => {
    if (selectedCustomer) {
      setName(selectedCustomer.name || "");
      setPhone(selectedCustomer.phone || "");
      setEmail(selectedCustomer.email || "");
      setCode(selectedCustomer.code || "");
    }
  }, [selectedCustomer]);

  return (
    <div className="fixed inset-0 bg-[#232323] flex items-center justify-center z-50 modal-backdrop">
      <div className="bg-[#383838] rounded-lg p-6 w-96 border-1 hover:border-[#FF7171] border-[#EEEEEE] transition duration-300 ease-in-out hover:shadow-[0_0_15px_#FF7171]">
        <h2 className="text-xl text-[#EEEEEE] font-bold mb-4">
          Update Customer
        </h2>

        <div className="gap-4 mb-4">
          <div className="mb-4">
            <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
              Customer Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#232323] text-[#EEEEEE]"
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
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#232323] text-[#EEEEEE]"
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
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#232323] text-[#EEEEEE]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
              Customer Code
            </label>
            <input
              disabled
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#232323] text-[#EEEEEE]"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleClose} // Close the modal
            className="bg-[#8A8A8A] text-white px-4 py-2 rounded-lg mr-2 hover:bg-[#5A5A5A] transition duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleUpdate} // Save the updated customer
            className="bg-[#FF7171] text-white px-4 py-2 rounded-lg hover:bg-[#FF8A8A] transition duration-300 ease-in-out"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomer;
