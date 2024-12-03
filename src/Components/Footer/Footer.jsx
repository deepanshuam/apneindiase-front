import React from "react";
import { FaWhatsapp,FaYoutube,FaFacebook,FaInstagram } from "react-icons/fa"; // Importing WhatsApp icon

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Address and Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ApneIndiaSe </h3>
            <p className="text-lg mb-2">vikaspuri</p>
            <p className="text-lg mb-2">Delhi</p>
            <p className="text-lg mb-2">
              Email:{" "}
              <a href="mailto:jattradecenter@gmail.com" className="text-blue-400">
                apneindiase@gmail.com
              </a>
            </p>
            <p className="text-lg">
              Phone:{" "}
              <a href="tel:+919416756138" className="text-blue-400">
                +91-9355464132
              </a>
            </p>
          </div>

          {/* Middle Section: Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-blue-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-red-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center mt-8 text-lg">
          <p>© 2024, ApneIndiaSe . All right reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919416756138"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </>
  );
};

export default Footer;
