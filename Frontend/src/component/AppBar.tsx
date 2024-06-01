import React from "react";
import { Link, useParams } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="border-b flex items-center justify-between max-w-[1200px] mx-auto px-10 py-5">
      <div className="font-medium">Medium</div>
      <div className="flex items-center gap-8">
        <Link to={"/publish"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="./write.png" alt="" className="w-5 h-5" />
            <p>Write</p>
          </div>
        </Link>
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            D
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
