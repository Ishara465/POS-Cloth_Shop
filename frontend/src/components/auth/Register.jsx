import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../https/index.js";
import toast from "react-hot-toast";

const Register = ({ setIsRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterMutation.mutate(formData);
  };

  // const RegisterMutation = useMutation({
  //   mutationFn: (reqData) => register(reqData),
  //   onSuccess: (res) => {
  //     const { data } = res;
  //     enqueueSnackbar(data.message, { variant: "success" });
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       password: "",
  //       role: "",
  //     });
  //     setTimeout(() => {
  //       setIsRegister(false);
  //     }, 1500);
  //   },
  //   onError: (err) => {
  //     const { response } = err;
  //     enqueueSnackbar(response?.data?.message || "Registration failed", {
  //       variant: "error",
  //     });
  //   },
  // });

  // use react Toast library
  const RegisterMutation = useMutation({
    mutationFn: (reqData) => register(reqData),
    onSuccess: (res) => {
      const { data } = res;
      toast.success(data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });
      setTimeout(() => {
        setIsRegister(false);
      }, 1500);
    },
    onError: (err) => {
      const { response } = err;
      toast.error(response?.data?.message || "Registration failed");
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Name
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name="name"
              placeholder="Enter Employee name"
              className="bg-transparent text-white focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Email
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="email"
              name="email"
              placeholder="Enter Employee email"
              className="bg-transparent text-white focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Phone
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name="phone"
              placeholder="Enter Employee phone"
              className="bg-transparent text-white focus:outline-none"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Password
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="bg-transparent text-white focus:outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Role
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <select
              name="role"
              className="bg-transparent text-white focus:outline-none w-full"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option className="text-[#1a1a1a]" value="">
                Select Role
              </option>
              <option className="text-[#1a1a1a]" value="admin">
                Admin
              </option>
              <option className="text-[#1a1a1a]" value="employee">
                Cashier
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 px-6 py-2 rounded-lg text-[#EEEEEE] w-full mt-4"
          disabled={RegisterMutation.isLoading}
        >
          {RegisterMutation.isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
