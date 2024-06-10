import React from "react";
import BlogCard from "../component/BlogCard";
import AppBar from "../component/AppBar";
import BlogSkeleton from "../component/BlogSkeleton";
import { useBlogs } from "../hooks";
const Blogs = () => {
  const { loading, blogs } = useBlogs();
  console.log(blogs);
  if (loading) {
    return (
      <>
        <AppBar />
        <div className="flex flex-col gap-5 items-center">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </>
    );
  }

  return (
    <div>
      <AppBar />
      <div className="flex flex-col max-w-[728px] min-w-[728px] mx-auto items-center justify-center">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            content={blog.content}
            publishedDate="Jan 2, 2024"
            author={blog.author.name}
            authorId={blog.authorId}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
