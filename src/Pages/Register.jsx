import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";

const RegisterBusiness = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    email: "",
    phone: "",
    whatsapp: "",
    category: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    gstNumber: "",
    bannerImage: null,
    businessImages: null,
    productService: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send data with file
    const formDataToSend = new FormData();

    // Append form text data
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (key !== "bannerImage" && key !== "businessImages") {
          formDataToSend.append(key, formData[key]);
        }
      }
    }

    // Append files
    if (formData.bannerImage) {
      formDataToSend.append("bannerImage", formData.bannerImage[0]);
    }
    if (formData.businessImages) {
      Array.from(formData.businessImages).forEach((file) => {
        formDataToSend.append("businessImages", file);
      });
    }

    try {
      // Send POST request using axios
      const response = await axios.post(
        "http://localhost:5000/api/v1/register/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle successful response
      console.log("Response:", response.data);
      alert("Business registered successfully!");
      setFormData({
        companyName: "",
        ownerName: "",
        email: "",
        phone: "",
        whatsapp: "",
        category: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        gstNumber: "",
        bannerImage: null,
        businessImages: null,
        productService: "",
      });
    } catch (error) {
      // Handle error response
      console.error("Error:", error);
      alert("Error registering business!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
        <div className="max-w-4xl w-full bg-white p-8 border-2 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Register Your Business
          </h2>
          <p className="text-lg text-center mb-6">
            We offer you the opportunity to list your business and promote it.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name / Product Heading*
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              {/* Owner Name */}
              <div>
                <label
                  htmlFor="ownerName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Owner Name*
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number*
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-gray-700"
                >
                  WhatsApp Number*
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your WhatsApp number"
                  required
                />
              </div>
              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category*
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your business category"
                  required
                />
              </div>

              {/* Address */}
              <div className="col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Address*
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your business address"
                  required
                ></textarea>
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your city"
                  required
                />
              </div>
              {/* State */}
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State*
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your state"
                  required
                />
              </div>

              {/* Pincode */}
              <div>
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode*
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your pincode"
                  required
                />
              </div>

              {/* GST Number */}
              <div className="col-span-2">
                <label
                  htmlFor="gstNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  GST Number (Optional)
                </label>
                <input
                  type="text"
                  id="gstNumber"
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your GST number"
                />
              </div>

              {/* Banner Image */}
              <div className="col-span-2">
                <label
                  htmlFor="bannerImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Banner Image*
                </label>
                <input
                  type="file"
                  id="bannerImage"
                  name="bannerImage"
                  onChange={handleFileChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Business Images */}
              <div className="col-span-2">
                <label
                  htmlFor="businessImages"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Business Images*
                </label>
                <input
                  type="file"
                  id="businessImages"
                  name="businessImages"
                  onChange={handleFileChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  multiple
                />
              </div>

              {/* Product or Service */}
              <div className="col-span-2">
                <label
                  htmlFor="productService"
                  className="block text-sm font-medium text-gray-700"
                >
                  What Product/Service do you provide?*
                </label>
                <textarea
                  id="productService"
                  name="productService"
                  value={formData.productService}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                  placeholder="Describe your products or services"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-md"
              >
                Register Business
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterBusiness;
