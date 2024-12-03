import React from 'react';
import { FaRegHandshake, FaCheckCircle, FaSearch } from 'react-icons/fa'; // Example icons

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-10 px-20">
      {/* Heading and Description */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-gray-600">Learn More about how our website works</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Card 1: Buy or Sell */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
          <FaRegHandshake className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Buy or Sell</h3>
          <p className="text-gray-600">
            You can add your business here for free of cost by just clicking on the Register Business button or purchase directly from manufacturers/providers.
          </p>
        </div>

        {/* Card 2: Get Verified */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
          <FaCheckCircle className="text-4xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Get Verified</h3>
          <p className="text-gray-600">
            Once you register your business, the verification process will start. Once you get verified by our team, your business will get listed here.
          </p>
        </div>

        {/* Card 3: Search and Purchase */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
          <FaSearch className="text-4xl text-orange-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Search and Purchase</h3>
          <p className="text-gray-600">
            You can search for products, restaurants, hotels, services, and many more by entering your keywords in the search box.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
