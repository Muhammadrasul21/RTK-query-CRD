import React from "react";

const Shop = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-4">Shop</h1>
      <div className="border p-4 rounded-md shadow-sm">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
          alt="Product"
          className="w-full h-64 object-cover rounded-md"
        />
        <h2 className="text-xl font-medium mt-3">Nature Art Print</h2>
        <p className="text-gray-600 mt-1">$29.99</p>
        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Shop;
