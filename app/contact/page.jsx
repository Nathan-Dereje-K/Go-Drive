"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createMailtoLink = () => {
    const { name, email, message } = formData;
    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    return `mailto:godriveitservice@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact-page min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-sky-200 to-indigo-300 px-6 py-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-stretch gap-12 w-full max-w-6xl">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="contact-form w-full md:w-1/2 bg-white shadow-2xl rounded-3xl p-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-800">
            Contact Us
          </h2>
          <p className="mb-8 text-gray-600 text-center leading-relaxed">
            We'd love to hear from you! Fill out the form below to get in touch.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = createMailtoLink();
            }}
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 text-gray-800 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-800 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-800 font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="map-container w-full md:w-1/2 bg-white shadow-2xl rounded-3xl overflow-hidden"
        >
          <iframe
            className="w-full h-[400px] md:h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1419.0295419832296!2d38.73564631970063!3d9.038485486102853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16356165fbae8cf3%3A0x9d85adfc5cdd5f0c!2sKokeb%20Building!5e0!3m2!1sen!2set!4v1652865095487!5m2!1sen!2set"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
