"use client";
import React from "react";
import Hero from "@/components/Hero";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { easeInOut, easeOut, motion } from "framer-motion";

const AboutPage = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: easeOut }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-96"
          >
            About Us
          </motion.h1>
        </div>
        {/* note about us */}
        <div className="mt-8 md:mt-16 mx-4 md:mx-24">
          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: easeInOut }}
            className="mt-8 mb-4 text-center text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Who we are <span className="text-orange-500">?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: easeInOut }}
            className="mt-4 text-lg leading-relaxed text-justify"
          >
            Since launching in 2018, Go Drive Car Rentals has become a leader in
            the industry, known for our core values: integrity, flexibility, and
            unwavering commitment to customer satisfaction. We cater to both
            individuals and businesses of all sizes, offering a variety of
            customized and all-inclusive rental options. Our focus on exceeding
            corporate client expectations has fueled our rapid growth, allowing
            us to continuously improve our services.
          </motion.p>

          {/* Additional Features */}
          <div className="mt-8 flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
              <FaCheckCircle className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Quality Vehicles</h3>
              <p className="text-lg">
                Our vehicles are top-notch, ensuring a comfortable and safe ride
                every time.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
              <FaCheckCircle className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Professional Drivers
              </h3>
              <p className="text-lg">
                Our drivers are experienced, courteous, and committed to
                providing excellent service.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
              <FaCheckCircle className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-lg">
                We're here for you round the clock, ready to assist with any
                inquiries or issues.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
              <FaCheckCircle className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-lg">
                Your satisfaction is our priority. We go above and beyond to
                exceed your expectations.
              </p>
            </div>
          </div>
          {/* Testimonials */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg mb-4">
                  "We have been using Go Drive for our business transportation
                  needs for years now. Always reliable and professional. Highly
                  recommended!"
                </p>
                <p className="text-sm font-semibold">
                  - Ethiopian Olympic committee
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg mb-4">
                  "Fantastic service! The drivers are friendly, and the vehicles
                  are clean and comfortable. Will definitely use again!"
                </p>
                <p className="text-sm font-semibold">
                  - Purpose Black Ethiopia
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg mb-4">
                  "We booked a minivan for a family vacation, and it was
                  perfect! Spacious and well-maintained. Thank you, Go Drive!"
                </p>
                <p className="text-sm font-semibold">
                  - Barok Tour and Car rent
                </p>
              </div>
            </div>
          </div>
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold mb-2">
              Ready to Experience Go Drive?
            </h2>
            <p className="text-lg mb-4">
              Discover your ride today and enjoy a comfortable journey with Go
              Drive!
            </p>
            <Link href={"/rental"}>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mb-16">
                Discover Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
