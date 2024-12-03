import React from "react";

const AddBusinessSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Do you want to add your business listing with us?
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-8">
          JTC offers you the opportunity to list your business with us, and we are
          more than capable of promoting your business.
        </p>

        {/* Register Business Button */}
        <a
          href="/register"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Register Business
        </a>
      </div>
    </section>
  );
};

export default AddBusinessSection;
