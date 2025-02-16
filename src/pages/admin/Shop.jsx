import React from "react";

const Shop = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-4">Car Shop</h1>
      <div className="border p-4 rounded-md shadow-sm">
        <img
          src="https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg"
          alt="Tesla Model S"
          className="w-full h-64 object-cover rounded-md"
        />
        <h2 className="text-xl font-medium mt-3">Tesla Model S</h2>
        <p className="text-gray-600 mt-1">$79,990</p>
        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Shop;
