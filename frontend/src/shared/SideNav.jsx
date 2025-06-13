import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineProductionQuantityLimits,
  MdCalculate,
  MdOutlineInventory,
} from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiKeyReturnFill } from "react-icons/pi";
import { FaTruckFast } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../https/index.js";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slices/userSlice.js";
import toast from "react-hot-toast";

const SideNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // LogOut Mutation
  const logoutMutation = useMutation({
    mutationFn: () => logout(), // <-- FIXED: no parentheses
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate("/auth");
      toast.success("Logged out successfully");
    },
    onError: (error) => {
      const { response } = error;
      toast.error(response?.data?.message || "Logout failed");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="side-nav bg-[#383838] w-70 h-full flex flex-col justify-between p-5 rounded-lg shadow-lg shadow-black">
      <div className="flex flex-col gap-5 m-5 ">
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <FaHome className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />
          Home
        </button>

        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/product")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <MdOutlineProductionQuantityLimits className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />
          Product
        </button>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/sales")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <MdCalculate className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />
          Sales
        </button>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/inventory")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <MdOutlineInventory className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />
          Inventory
        </button>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/customer")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <IoMdPerson className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />
          Customer
        </button>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/return")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <PiKeyReturnFill className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />
          Returns
        </button>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/supplier")}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <FaTruckFast className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />
          Supplier
        </button>
      </div>

      <div>
        <button
          className="relative text-[#EEEE] text-xl mb-3 flex items-center hover:text-white pl-4 transition-all duration-300 ease-in-out group"
          onClick={handleLogout}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#FF7171] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></span>
          <BiLogOut className="mr-2 text-[#EEEE] group-hover:text-[#FF7171]" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNav;
