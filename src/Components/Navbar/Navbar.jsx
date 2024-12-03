import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import img from "../../assets/ApneIndiaSe.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md sticky top-0">
      <div className="container mx-auto flex items-center justify-between px-8 py-3">
        {/* Logo with left padding */}
        <div className="flex items-center space-x-2 pl-20">
          <Link to="/">
            {" "}
            {/* Link to the home page */}
            <img src={img} alt="Logo" className="w-50 h-20" />
          </Link>
        </div>

        {/* Register Button with right padding */}
        <div className="pr-20">
          <a
            href="/register"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Register Business
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
