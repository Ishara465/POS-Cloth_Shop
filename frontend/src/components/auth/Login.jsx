import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../https/index.js";
import { setUser } from "../../redux/slices/userSlice.js";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fromData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
    loginMutation.mutate(fromData);
  };

  const loginMutation = useMutation({
    mutationFn: (reqData) => login(reqData),
    onSuccess: (res) => {
      const { data } = res;
      const { _id, name, email, role } = data.data;
      dispatch(setUser({ _id, name, email, role }));
      navigate("/");
      toast.success("Login successful");
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
            Employee Email
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name="email"
              placeholder="Enter Employee Email"
              className="w-full bg-transparent text-white focus:outline-none"
              value={fromData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Password
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="bg-transparent text-white focus:outline-none"
              value={fromData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 rounded-lg text-lg bg-[#FF7171] text-white font-bold"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
