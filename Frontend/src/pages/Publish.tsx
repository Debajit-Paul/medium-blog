import React, { useState } from "react";
import AppBar from "../component/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePublish = async () => {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      {
        title,
        content: description,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    navigate(`/blog/${response.data.id}`);
  };

  return (
    <div className="">
      <AppBar />
      <div className="flex flex-col mx-auto max-w-[1440px] mt-[40px]">
        <input
          className="bg-gray-50 border-t border-x border-gray-300 text-gray-900 text-sm block w-[90%] p-2.5 mx-10 resize-none outline-none"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="bg-gray-50 border-b border-x border-gray-300 text-gray-900 text-sm block w-[90%] h-[50vh] p-2.5 mx-10 resize-none outline-none"
          placeholder="Write your article..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handlePublish}
          className="text-white bg-[#1a8917] px-3 py-2 rounded-md text-sm w-[100px] mx-10 mt-2"
        >
          Publish post
        </button>
      </div>
    </div>
  );
};

export default Publish;
