import React, { useState } from "react";
import loading from "../../assets/loadingg.webp";
import { useGetCarsQuery, useDeleteCarMutation, useUpdateCarMutation } from "../../redux/api/car.api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Car = () => {
  const { data, isLoading } = useGetCarsQuery();
  const [deleteCar] = useDeleteCarMutation();
  const [updateCar] = useUpdateCarMutation();
  const [editCar, setEditCar] = useState(null);
  const [form, setForm] = useState({
    car: "",
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
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleDeleteCar = (id) => {
    deleteCar({ id });
    toast.error("Book deleted successfully!")
  };

  const handleEdit = (car) => {
    setEditCar(car);
    setForm(car);
  };

  const handleUpdate = () => {
    updateCar({ id: editCar.id, body: form })
      .unwrap()
      .then(() => {
        setEditCar(null);
        setForm({
          car: "",
          image: "",
          desc: "",
          brand: "",
          year: "",
          price: "",
        });
      });
      toast.warning("Book updated successfully!");

  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {isLoading && (
        <div className="text-center mt-6">
          <img src={loading} alt="Loading..." className="mx-auto w-[300px] h-[300px]" />
        </div>
      )}

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold pb-3 mb-3 border-b border-gray-200">
              {car.car}
            </h3>
            {car.image && (
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
            )}
            <p className="text-gray-700 mb-2">{car.desc}</p>
            <p className="text-gray-500 text-sm">Brand: {car.brand}</p>
            <p className="text-gray-500 text-sm">Year: {car.year}</p>
            <p className="text-gray-500 text-sm">Price: ${car.price}</p>
            <button
              onClick={() => handleDeleteCar(car.id)}
              className="bg-red-500 text-white text-sm mr-4 px-4 py-1 mt-3 rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(car)}
              className="bg-green-400 text-white text-sm px-4 py-1 mt-3 rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {editCar && (
        <div  onClick={() => setEditCar(null)}  className="fixed inset-0 bg-[#00000095] bg-opacity-50 flex justify-center items-center">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Car</h2>
            <form className="flex flex-col gap-4">
              {["title", "desc", "brand", "year", "price"].map((field) => (
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
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setEditCar(null)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Car;
