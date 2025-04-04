import React from "react";
import SideNav from "../shared/SideNav";

const Home = () => {
  return (
    <div className="flex bg-[#232323] h-[calc(100vh-7.5rem)] overflow-hidden gap-2">
      {/* Left Div */}
      <div className="flex-1  m-3 rounded-lg shadow-6xl ">
        <SideNav />
      </div>

      {/* Right Div */}
      <div className="flex-7">
        <h1 className="text-white text-7xl">Home</h1>
      </div>
    </div>
  );
};

export default Home;
