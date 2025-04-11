import React from "react";

const AddSupplier = () => {
  return (
    <div className="bg-[#383838] w-80 h-100 rounded-lg flex flex-col items-center gap-2 shadow-lg">
      <h1 className="text-[#EEEEEE] font-bold  flex py-5  text-xl ">
        Add Customer
      </h1>
      <label className="text-[#EEEEEE]">Enter Customer Name</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          type="text"
          placeholder="Customer Name"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <label className="text-[#EEEEEE]">Enter Customer Phone</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          type="text"
          placeholder="Customer Name"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <label className="text-[#EEEEEE]">Enter Customer Email</label>
      <div className="bg-[#232323] rounded-lg flex w-70 h-10 items-center justify-center  ">
        <input
          type="text"
          placeholder="Customer Email"
          className="w-full h-full ml-4 text-[#8A8A8A] text-lg outline-none"
        />
      </div>

      <div className="flex mt-5  justify-center ">
        <button
          button
          className="text-lg font-bold hover:bg-[#8A8A8A] transition duration-300 ease-in-out rounded-lg bg-[#FF7171] text-[#EEEEEE] items-center justify-center px-30 py-2"
          // onClick={handleOpenModal}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddSupplier;
