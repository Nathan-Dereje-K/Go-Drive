"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RentalPage() {
  const cars = [
    {
      id: 1,
      name: "Suzuki Dzire",
      type: "Sedan",
      price: 20,
      available: true,
      image: "/cars/car2.jpg",
    },
    {
      id: 2,
      name: "Toyota Hiace",
      type: "Van",
      price: 150,
      available: true,
      image: "/cars/car3.jpg",
    },
    {
      id: 3,
      name: "Hyundai Tucson",
      type: "SUV",
      price: 55,
      available: true,
      image: "/cars/car1.jpg",
    },
    {
      id: 4,
      name: "Toyota Coaster",
      type: "Bus",
      price: "",
      available: true,
      image: "/cars/car5.jpg",
    },
    {
      id: 5,
      name: "Toyota Hilux",
      type: "Pick-up",
      price: 25000,
      available: true,
      image: "/cars/car6.jpg",
    },
    {
      id: 6,
      name: "Toyota Vitz",
      type: "Economy",
      price: 80,
      available: true,
      image: "/cars/car9.jpg",
    },
    {
      id: 7,
      name: "Toyota Minibus",
      type: "Minibus",
      price: 80,
      available: true,
      image: "/cars/car4.jpg",
    },
    {
      id: 8,
      name: "Toyota Car",
      type: "Economy",
      price: 80,
      available: true,
      image: "/cars/car8.jpg",
    },
    {
      id: 9,
      name: "Toyota V8",
      type: "Luxury",
      price: 80,
      available: true,
      image: "/cars/car10.jpg",
    },
    {
      id: 10,
      name: "Toyota Minibus",
      type: "Minibus",
      price: 80,
      available: true,
      image: "/cars/car7.jpg",
    },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="container mx-auto p-6 mt-5 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Available <span className="text-orange-500">Cars</span> for Rent
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around gap-2 mb-10 space-y-4 md:space-y-0">
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="w-full md:w-1/3 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
          >
            <option value="">All Types</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Pick-up">Pick-up</option>
            <option value="Luxury">Luxury</option>
            <option value="Minibus">Minibus</option>
            <option value="Economy">Economy</option>
            <option value="Van">Van</option>
            <option value="Bus">Bus</option>
          </select>
          <div className="w-full md:w-1/3 p-2 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500">
            <input
              type="text"
              placeholder="Search by brand name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full focus:outline-none"
            />
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCars.map((car) => (
            <motion.div
              key={car.id}
              variants={cardVariants}
              className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {car.name}
              </h2>
              <p className="text-gray-600 mb-2">Type: {car.type}</p>
              <p
                className={`text-sm font-medium ${
                  car.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {car.available ? "Available" : "Not Available"}
              </p>
              <p className="text-sm font-medium mt-2">Phone: +251 911130416</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
