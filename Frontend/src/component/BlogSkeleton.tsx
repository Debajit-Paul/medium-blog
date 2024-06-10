import React from "react";

const BlogSkeleton = () => {
  return (
    <div role="status" className=" animate-pulse">
      <div className="flex flex-col pt-[24px] border-b-[1.5px] max-w-[480px] min-w-[480px] mx-auto">
        <div className="flex gap-3">
          <div className="w-[24px] h-[24px] bg-gray-200 rounded-full mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-24 mb-4"></div>
        </div>

        <div className="mt-[12px] flex cursor-pointer">
          <div className="flex-1">
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5 w-30"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          </div>

          <div className="ml-[60px]">
            <div className="w-[112px] h-[112px] bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default BlogSkeleton;
