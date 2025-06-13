import React, { useState } from "react";
import BgIMG from "../assets/image/BgIMG.jpeg";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import { PiDropboxLogoBold } from "react-icons/pi";
const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Left section */}
      <div className="w-1/2 relative flex items-center justify-center bg-cover">
        <img src={BgIMG} alt="BG IMG" className="w-full h-full object-cover" />

        {/* black overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* quote at button */}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
          "Save customers' money with us. We are the best in the market. Don't
          miss out. Get started today. "
          <br />
          <span className="block mt-4 text-[#FF7171]">Founder of NeatFit</span>
        </blockquote>
      </div>

      {/* Right Section */}
      <div className="w-1/2 min-h-screen bg-[#1a1a1a] p-10">
        {/* LOGO */}
        <div className="bg-[#2a2a2a] h-15 flex items-center justify-center w-45 rounded-lg">
          <h1 className="text-[#E8EEF1] font-bold px-5 text-2xl flex items-center gap-2">
            <PiDropboxLogoBold className="text-[#FF7171]" />
            NeatFit
          </h1>
        </div>

        <h2 className=" text-4xl text-center mt-10 font-semibold text-[#FF7171]">
          {isRegister ? "Employee Registration" : "Employee Login"}
        </h2>

        {/* components */}
        {isRegister ? <Register setIsRegister={setIsRegister} /> : <Login />}

        {/* Register */}
        <div className="flex justify-center mt-6">
          <p className="text-sm text-[#ababab]">
            {" "}
            {isRegister
              ? "Already have an account?"
              : "Don't have an account"}{" "}
            <a
              onClick={() => setIsRegister(!isRegister)}
              className="text-[#FF7171] font-semibold hover:underline"
              href="#"
            >
              {isRegister ? "Sign in" : "Sign up"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
