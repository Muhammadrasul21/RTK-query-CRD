import { catalogInfo } from '@/static';
import React from 'react';



const Catalog = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Car Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {catalogInfo.map((car) => (
          <div key={car.id} className="border rounded-lg shadow-lg p-4 text-center bg-white">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-medium">{car.name}</h3>
            <p className="text-gray-600">{car.price}</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
