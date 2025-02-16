import React, { useState } from "react";
import { useCreateCarMutation } from "../../redux/api/car.api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { carInputs } from "../../static";

const CreateCar = () => {
  const [createCar, { isLoading: createLoading }] = useCreateCarMutation();

  const [form, setForm] = useState({
    title: "",
    image: "",
    desc: "",
    brand: "",
    year: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "number" ? +(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.image.startsWith("http")) {
      return toast.error("Please enter a valid image URL!");
    }
    
    const carData = {
      ...form,
      year: +(form.year),
      price: +(form.price),
    };

    createCar(carData)
      .unwrap()
      .then(() => {
        setForm({
          title: "",
          image: "",
          desc: "",
          brand: "",
          year: "",
          price: "",
        });
        toast.success("Car created successfully!");
      })
      .catch(() => toast.error("Failed to create car!"));
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-xl mx-auto bg-gray-900 text-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Create a New Car</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {carInputs.map((field) => (
            <input
              key={field}
              required
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type={field === "year" || field === "price" ? "number" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          ))}
          <input
            required
            name="image"
            value={form.image}
            onChange={handleChange}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Image URL"
          />
          <button
            disabled={createLoading}
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
          >
            {createLoading ? "Loading..." : "Create Car"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCar;
