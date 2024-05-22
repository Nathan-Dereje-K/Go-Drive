import React from "react";
import {
  FaTelegramPlane,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-5">
          <a
            href="#"
            className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded transition"
          >
            <FaTelegramPlane className="text-xl" />
            <span>Telegram</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:bg-blue-400 p-2 rounded transition"
          >
            <FaTwitter className="text-xl" />
            <span>Twitter</span>
          </a>
          <a
            href="mailto:godriveitservice@gmail.com"
            className="flex items-center space-x-2 hover:bg-red-500 p-2 rounded transition"
          >
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </a>
          <a
            href="tel:+251-911-13-04-16"
            className="flex items-center space-x-2 hover:bg-green-500 p-2 rounded transition"
          >
            <FaPhone className="text-xl" />
            <span>Phone</span>
          </a>
        </div>
        <hr className="border-t border-gray-400 my-5" />
        <div className="text-center">
          <p>Established 2018</p>
          <p>© 2024 Go Drive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
