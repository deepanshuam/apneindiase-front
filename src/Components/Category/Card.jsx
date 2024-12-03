import React from "react";

const Card = ({ name, src, description, type, whatsapp }) => {
  return (
    <div className="bg-white  p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer overflow-hidden">
      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src={src}
          alt={name}
          className="w-24 h-24 object-cover square-full border-4 border-green-500 shadow-lg"
        />
      </div>

      {/* Title */}
      <h3 className="text-center text-xl font-semibold text-gray-900 mb-2">{name}</h3>

      {/* Type */}
      <p className="text-center text-sm text-gray-600 mb-2 font-medium">{type}</p>

      {/* Description */}
      <p className="text-center text-sm text-gray-500 mb-4">{description}</p>

      {/* WhatsApp Button */}
      <div className="text-center">
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all ease-in-out transform hover:scale-105"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Card;
