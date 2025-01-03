"use client";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="relative h-[90vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/3764000/pexels-photo-3764000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-black absolute inset-0 z-10"
        ></motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          className=" flex flex-col justify-start items-start absolute bottom-80 md:bottom-64 left-14 text-center md:text-start text-white z-20"
        >
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-9xl"
          >
            Go <span className="text-orange-500">Drive</span>
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
            className="text-lg md:text-4xl font-serif font-medium pt-10"
          >
            Embark on Your Journey with Go Drive
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
