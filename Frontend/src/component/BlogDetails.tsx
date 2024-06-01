import React from "react";
import { BlogType } from "../hooks";

const BlogDetails = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="mx-auto max-w-[1200px] w-full px-10 grid grid-cols-12">
      <div className="col-span-8 ">
        <div className=" text-[42px] leading-[52px] font-[700] mt-[1.19em] ">
          {blog.title}
        </div>
        <div className="text-slate-500 mt-[5px] mb-[32px]">
          Post on December 2nd, 2023
        </div>
        <div className="text-[20px] leading-[32px]">{blog.content}</div>
      </div>

      <div className=" col-span-4 ml-[40px]">
        <div className="mt-[3em] font-[500]">Author</div>
        <div className="flex items-center gap-3">
          <div>
            <div className="relative inline-flex items-center justify-center w-[30px] h-[30px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {blog.author.name[0].toUpperCase()}
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[24vw] lg:w-[15vw] mt-3">
            <h2 className="text-[25px] font-[700] ">
              {blog.author.name || "Anonymous"}
            </h2>
            <p className="flex-auto flex-wrap text-slate-500 text-[15px]">
              andnadnandajndad ajdkn aksnd akndjn aanasnaksnd akndaknaskn dada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
