import React from "react";
import BlogCard from "../component/BlogCard";

const Blogs = () => {
  return (
    <div className="flex flex-col max-w-[728px] min-w-[728px] mx-auto items-center justify-center">
      <BlogCard
        title="What is Amazon CloudFront and How Does It Work?"
        content="Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.
        Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations.
        When a user requests content that you’re serving with CloudFront, the request is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance."
        publishedDate="Jan 2, 2024"
        author="Debajit"
      />
      <BlogCard
        title="title of the blog"
        content="content of the blog"
        publishedDate="Jan 2, 2024"
        author="Hakirat"
      />
    </div>
  );
};

export default Blogs;
