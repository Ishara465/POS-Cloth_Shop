import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCustomer } from "../../redux/slices/customerSlice.js";
import toast from "react-hot-toast";

const AddCustomer = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleAddCustomer = () => {
    if (!name || !phone || !email) {
      toast.error("All fields are required!");
      return;
    }

    if (!/^\d+$/.test(phone)) {
      toast.error("Phone number should contain only digits!");
      return;
    } else if (phone.length < 10) {
      toast.error("Phone number should be at least 10 digits long!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email format!");
      return;
    }

    if (!/^[A-Za-z0-9]+$/.test(code)) {
      toast.error("Code should contain only alphanumeric characters!");
      return;
    }
    if (name && phone && email && code) {
      dispatch(
        setCustomer({
          name,
          phone,
          email,
          code,
        })
      );
      handleClear();
      toast.success("Customer added successfully!");
    } else {
      toast.error("Please fill all fields");
    }
  };

  const handleClear = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCode("");
  };

  return (
    <div className="bg-[#383838] w-full h-128 rounded-lg flex flex-col items-center gap-2 shadow-lg">
      <h1 className="text-[#EEEEEE] font-bold  flex py-5  text-xl ">
        Add Customer
      </h1>
      <label className="text-[#EEEEEE]">Enter Customer Name</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Customer Name"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <label className="text-[#EEEEEE]">Enter Customer Phone</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Customer Phone"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <label className="text-[#EEEEEE]">Enter Customer Email</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Customer Email"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <label className="text-[#EEEEEE]">Enter Customer Code</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="text"
          placeholder="Customer Code"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <div className="flex mt-5 gap-2  justify-center ">
        <button
          button
          className="text-lg font-semibold hover:bg-[#FF8A8A] transition duration-300 ease-in-out rounded-lg bg-[#FF7171] text-[#EEEEEE] items-center justify-center px-18 py-2"
          onClick={handleAddCustomer}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
