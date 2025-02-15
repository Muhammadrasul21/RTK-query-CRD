import React, { useState } from "react";
import loading from "../assets/loadingg.webp";
import { useCreateBookMutation, useGetBooksQuery, useDeleteBookMutation, useUpdateBookMutation } from "../redux/api/blog.api.js";

const Home = () => {
  const { data, isLoading } = useGetBooksQuery();
  const [createBook, { isLoading: createLoading }] = useCreateBookMutation();
  const [deleteBook] = useDeleteBookMutation();
  const [updateBook] = useUpdateBookMutation();
  const [edit, setEdit] = useState(null);

  const [form, setForm] = useState({
    title: "",
    desc: "",
    author: "",
    type: "",
    soldCount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (edit) {
      updateBook({ id: edit.id, body: form })
        .unwrap()
        .then(() => {
          setForm({ title: "", desc: "", author: "", type: "", soldCount: "" });
          setEdit(null);
        });
    } else {
      createBook(form)
        .unwrap()
        .then(() => setForm({ title: "", desc: "", author: "", type: "", soldCount: "" }));
    }
  };

  const handleDeleteBook = (id) => {
    deleteBook(id);
  };

  const handleEdit = (blog) => {
    setEdit(blog);
    setForm(blog);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">{edit ? "Edit Book" : "Create a New Book"}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {["title", "desc", "author", "type", "soldCount"].map((field) => (
            <input
              key={field}
              required
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type={field === "soldCount" ? "number" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          ))}
          <button
            disabled={createLoading}
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
          >
            {createLoading ? "Loading..." : edit ? "Save" : "Create Book"}
          </button>
        </form>
      </div>

      {isLoading && (
        <div className="text-center mt-6">
          <img src={loading} alt="Loading..." className="mx-auto w-[300px] h-[300px]" />
        </div>
      )}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold pb-3 mb-3 border-b border-gray-200">{blog.title}</h3>
            <p className="text-gray-700 mb-2">{blog.desc}</p>
            <p className="text-gray-500 text-sm">Author: {blog.author}</p>
            <p className="text-gray-500 text-sm">Type: {blog.type}</p>
            <p className="text-gray-500 text-sm">Sold Count: {blog.soldCount}</p>
            <button
              onClick={() => handleDeleteBook(blog.id)}
              className="bg-red-500 text-white text-sm mr-4 px-4 py-1 mt-3 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(blog)}
              className="bg-green-400 text-white text-sm px-4 py-1 mt-3 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
