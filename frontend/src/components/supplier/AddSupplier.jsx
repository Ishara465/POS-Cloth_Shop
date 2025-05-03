import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSupplier } from "../../redux/slices/supplier";

const AddSupplier = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleAddSupplier = () => {
    if (!id || !name || !phone || !email) {
      toast.error("All fields are required!");
      return;
    }

    if (isNaN(phone)) {
      toast.error("phone number should be number");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("invalid email format");
      return;
    }

    dispatch(
      setSupplier({
        id,
        name,
        phone,
        email,
      })
    );
    toast.success("Supplier added successfully");
    handleClear();
  };

  const handleClear = () => {
    setId("");
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="bg-[#383838] w-80 h-120 rounded-lg flex flex-col items-center gap-2 shadow-lg">
      <h1 className="text-[#EEEEEE] font-bold  flex py-5  text-xl ">
        Add Supplier
      </h1>
      <label className="text-[#EEEEEE]">Enter Supplier ID</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="Supplier ID"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <label className="text-[#EEEEEE]">Enter Supplier Name</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Supplier Name"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <label className="text-[#EEEEEE]">Enter Supplier Phone</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Supplier Phone"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <label className="text-[#EEEEEE]">Enter Supplier Email</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Supplier Email"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <div className="flex mt-5  justify-center ">
        <button
          onClick={handleAddSupplier}
          className="text-lg font-bold hover:bg-[#FF8A8A] transition duration-300 ease-in-out rounded-lg bg-[#FF7171] text-[#EEEEEE] items-center justify-center px-30 py-2"
          // onClick={handleOpenModal}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddSupplier;
