import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] sm:w-1/4 xl:flex fixed h-screen hidden overflow-hidden">
      <div className="w-full h-full flex flex-col p-3 items-center">
        <div className="text-2xl text-white border-b-2 hover:text-black hover:border-black">
          Home
        </div>
        <div className="text-2xl text-white border-b-2 hover:text-black hover:border-black">
          About
        </div>
        <div className="text-2xl text-white border-b-2 hover:text-black hover:border-black">
          Settings
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
