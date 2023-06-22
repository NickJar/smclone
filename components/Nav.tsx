import React from "react";

const nav = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] shadow-lg shadow-black-500/50 h-14 w-full flex rounded-br-md rounded-bl-md">
      <div className="sm:flex hidden pl-3 pr-3 items-center justify-between w-full">
        <div className="pl-6 pr-6 flex gap-2">
          <div></div>
          <div className="text-lg text-white">smclone</div>
        </div>

        <div className="flex flex-1 max-w-2xl">
          <input
            className="flex p-1 pl-4 mr-6 flex-1 bg-[rgba(255,255,255,0.3)] border-2 text-white placeholder:text-white border-sky-200 rounded-full"
            placeholder="search"
          />
        </div>
        <div className="flex gap-3 pr-6">
          <button className="border-2 border-sky-200 p-1 pl-3 pr-3 rounded-lg text-white hover:text-sky-300">
            Get App
          </button>
          <button className="border-2 border-sky-200 p-1 pl-4 pr-4 text-white hover:text-sky-300 rounded-lg">
            Log In
          </button>
          <div></div>
        </div>
      </div>
      <div className="sm:hidden flex items-center justify-between w-full">
        <div className="pl-6 pr-6 flex gap-2">
          <div></div>
          <div className="text-lg text-white">smclone</div>
        </div>
        <div className="text-4xl text-white pr-6">=</div>
      </div>
    </div>
  );
};

export default nav;
