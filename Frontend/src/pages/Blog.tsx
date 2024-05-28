import React from "react";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import BlogDetails from "../component/BlogDetails";
import AppBar from "../component/AppBar";
import { BlogType } from "../hooks";


const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="">
      <AppBar />
      <BlogDetails blog={blog as BlogType}/>
    </div>
  );
};

export default Blog;
