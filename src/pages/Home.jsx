import React, { useRef } from "react";
import loading from "../assets/loadingg.webp"; 

import { useCreateBlogMutation, useGetBlogsQuery, useDeleteBlogMutation } from "../redux/api/blog.api.js";

const Home = () => {
  const { data, isLoading } = useGetBlogsQuery();
  const [createBlog, { isLoading: createLoading }] = useCreateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();

  const title = useRef(null);
  const desc = useRef(null);
  const author = useRef(null); 
  const type = useRef(null);    
  const soldCount = useRef(null); 

  const handleCreateBlog = (e) => {
    e.preventDefault();
    let newBlog = {
      title: title.current.value,
      desc: desc.current.value,
      author: author.current.value,  
      type: type.current.value,     
      soldCount: soldCount.current.value,
    };

    createBlog(newBlog)
      .unwrap()
      .then(() => {
        title.current.value = "";
        desc.current.value = "";
        author.current.value = "";  
        type.current.value = "";   
        soldCount.current.value = ""; 
      });
  };

  const handleDeleteBlog = (id) => {
    deleteBlog(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Create a New Blog</h2>
        <form onSubmit={handleCreateBlog} className="flex flex-col gap-4">
          <input
            required
            ref={title}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Title"
          />
          <input
            required
            ref={desc}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Description"
          />
          <input
            required
            ref={author}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Author"
          />
          <input
            required
            ref={type}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Type"
          />
          <input
            required
            ref={soldCount}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="Sold Count"
          />
          <button
            disabled={createLoading}
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
          >
            {createLoading ? "Loading..." : "Create Blog"}
          </button>
        </form>
      </div>

      {isLoading && (
        <div className="text-center mt-6">
          <img src={loading} alt="Loading..." className="mx-auto w-[300px] h-[300px] " />
        </div>
      )}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold pb-3 mb-3 border-b border-gray-200">{blog.title}</h3>
            <p className="text-gray-700 mb-2">{blog.desc}</p>
            <p className="text-gray-500 text-sm">Author: {blog.author}</p>
            <p className="text-gray-500 text-sm">Type: {blog.type}</p>
            <p className="text-gray-500 text-sm">Sold Count: {blog.soldCount}</p>
            <button
              onClick={() => handleDeleteBlog(blog.id)}
              className="bg-red-500 text-white text-sm px-4 py-1 mt-3 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
