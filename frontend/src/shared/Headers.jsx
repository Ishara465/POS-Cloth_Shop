import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import profileImg from "../assets/image/profileImg.jpeg";
import { PiDropboxLogoBold } from "react-icons/pi";

const Headers = ({ activeSection }) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center  w-full h-30 px-4 justify-between bg-[#232323]">
      <div
        className="flex items-start px-2 py-3 mt-10 bg-[#383838] gap-2 m-3 rounded-lg h-15 shadow-10xl] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <h1 className="text-[#E8EEF1] font-bold px-5 text-2xl flex items-center gap-2">
          <PiDropboxLogoBold className="text-[#FF7171]" />
          NeatFit
        </h1>
      </div>

      <div className="flex absolute left-80 items-center mt-10 ml-5">
        <h1 className="text-[#EEEEEE] font-bold text-3xl ">{activeSection}</h1>
      </div>

      <div className="flex flex-col justify-center p-5 mt-10">
        <div className="flex gap-6 text-[#E8EEF1] font-semibold text-xl">
          <button
            className="bg-[#383838] px-4 py-3   rounded-lg hover:bg-[#FF7171] transition-all duration-300 cursor-pointer"
            // onClick={() => navigate("/")}
          >
            <IoMdSearch size={20} />
          </button>
          <button
            className="bg-[#383838] px-4 py-3 rounded-lg hover:bg-[#FF7171] transition-all duration-300 cursor-pointer"
            // onClick={() => navigate("/product")}
          >
            <FaBell />
          </button>
          <button
            className="bg-[#383838] px-4 py-3 rounded-lg hover:bg-[#FF7171] transition-all duration-300 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <MdDashboard />
          </button>

          <div className="flex items-center gap-3  cursor-pointer">
            <img
              src={profileImg}
              alt="profile img"
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-xl cursor-pointer truncate overflow-hidden text-ellipsis max-w-[100px] ">
                Ishara Sandeepa
              </h1>
              <p className="text-[10px]">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
