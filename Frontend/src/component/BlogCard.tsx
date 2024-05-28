import React from "react";
import { Link } from "react-router-dom";
interface BlogCardProps {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  author: string;
  authorId: string;
}

const BlogCard = ({
  id,
  title,
  content,
  publishedDate,
  author,
  authorId,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col pt-[24px] border-b-[1.5px] max-w-[680px] min-w-[680px] mx-auto">
      <Link to={`/author/${authorId}`}>
        <div className="flex gap-3">
          <div className="relative inline-flex items-center justify-center w-[24px] h-[24px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {author[0].toUpperCase()}
            </span>
          </div>
          <p className=" text-[#6B6B6B] text-[14px] flex items-center">
            <span className=" text-black hover:underline cursor-pointer">
              {author}
            </span>
            <span className="mx-[4px] text-[14px] leading-[20px] font-[400]">
              .
            </span>
            {publishedDate}
          </p>
        </div>
      </Link>

      <Link to={`/blog/${id}`}>
        <div className="mt-[12px] flex cursor-pointer">
          <div className="flex-1">
            <h2 className="text-[20px] font-[700] max-h-[72px] leading-[24px] text-[#242424] pb-[8px]">
              {title}
            </h2>
            <p className=" text-[#242424] font-[400] text-[16px] max-h-[72px] leading-[24px]">
              {content.slice(0, 200) + "..."}
            </p>
            <div className="text-[13px] text-[#6b6b6b] leading-[20px] font-[400] py-[32px]">{`${Math.ceil(
              content.length / 100
            )} min read`}</div>
          </div>

          <div className="ml-[60px]">
            <img
              src="https://miro.medium.com/v2/resize:fill:112:112/1*D-TiKrBADjkMrnHjBAQ4bQ.png"
              alt=""
              className="w-[112px] h-[112px]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
