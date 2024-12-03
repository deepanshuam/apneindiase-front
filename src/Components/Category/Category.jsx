import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "./Card";
import axios from "axios";

const CategoryDetails = () => {
  const { categoryName } = useParams(); // Get categoryName from the URL
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch categories based on categoryName (type) from the URL
    const fetchCategories = async () => {
      try {
        // Replace ':type' with the actual categoryName
        const response = await axios.get(
          `http://localhost:5000/api/v1/category/categories/type/${categoryName}`
        );
        console.log(response.data); // Log response for debugging
        setCategories(response.data.data); // Set the categories state
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false); // Set loading to false after data fetch
      }
    };

    fetchCategories();
  }, [categoryName]); // Dependency on categoryName so data updates if category changes

  // Filter categories based on the category name from the URL (categoryName)
  const filteredCategories = Array.isArray(categories)
    ? categories.filter(
        (cat) => cat.type?.toLowerCase() === categoryName.toLowerCase()
      )
    : [];
  console.log("Filtered Categories:", filteredCategories);
  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (filteredCategories.length === 0) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Category not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-20">
        <h1 className="text-3xl font-bold mb-4 text-center p-10 ">
          {categoryName.replace(/-/g, " ")} {/* Replace dashes with spaces */}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => (
            <Card
              key={cat._id || cat.title} // Use _id, and fallback to title if _id is not available
              name={cat.title} // Assuming title is the name
              src={cat.image} // Assuming image URL is in the image field
              description={cat.description} // Assuming description is available
              whatsapp={cat.whatsapp} // Ensure that this field exists in the response data
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryDetails;
