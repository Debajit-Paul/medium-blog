import React from "react";

const AppBar = () => {
  return (
    <div className="border-b flex items-center justify-between max-w-[1200px] mx-auto px-10 py-5">
      <div className="font-medium">Medium</div>
      <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">D</span>
      </div>
    </div>
  );
};

export default AppBar;
