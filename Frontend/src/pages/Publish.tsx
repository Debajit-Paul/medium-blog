import React from "react";
import AppBar from "../component/AppBar";

const Publish = () => {
  return (
    <div className="">
      <AppBar />
      <div className="flex flex-col items-center mx-auto max-w-[1440px] mt-[40px]">
        <input
          className="bg-gray-50 border-t border-x border-gray-300 text-gray-900 text-sm block w-[90%] p-2.5 mx-10 resize-none outline-none"
          placeholder="Title"
        />
        <textarea
          className="bg-gray-50 border-b border-x border-gray-300 text-gray-900 text-sm block w-[90%] h-[50vh] p-2.5 mx-10 resize-none outline-none"
          placeholder="Write your article..."
        />
      </div>
    </div>
  );
};

export default Publish;
