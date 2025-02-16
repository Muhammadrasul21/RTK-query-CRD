
import React from "react";
import { likedCars } from "../../static";

const Likes = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Liked Cars</h2>
      <div className="space-y-4">
        {likedCars.map((car) => (
          <div
            key={car.id}
            className="border p-4 rounded-md shadow-sm flex justify-between items-center bg-gray-100"
          >
            <div>
              <h3 className="font-medium text-lg">{car.name}</h3>
              <p className="text-sm text-gray-600">{car.desc}</p>
            </div>
            <button className="text-red-500 hover:text-red-600 transition">
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Likes;