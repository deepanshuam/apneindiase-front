import React from "react";
import img from "../../assets/Cart.jpg";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-[500px] flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${img})`, // Replace with your image URL
      }}
    >
      {/* Banner Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-center px-4 text-white transition-all transform hover:text-blue-500 hover:scale-110">
        Best place to find local products and services
      </h1>

      {/* Search Bar and Button */}
      <div className="mt-6 flex items-center w-11/12 max-w-xl transition-all transform hover:scale-105">
        <input
          type="text"
          placeholder="Search for products or services..."
          className="flex-grow p-3 text-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all transform hover:scale-105"
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600 transition-all transform hover:scale-105">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
