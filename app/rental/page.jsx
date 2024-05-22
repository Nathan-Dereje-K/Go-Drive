"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function RentalPage() {
  const cars = [
    {
      id: 1, // Changed to avoid potential conflicts
      name: "Suzuki Dzire",
      type: "Sedan",
      price: 20, // This is an estimate, you can find the actual price online
      available: true,
      image: "/cars/car2.jpg", // Replace with actual image path
    },
    {
      id: 2, // Changed to avoid potential conflicts
      name: "Toyota Hiace",
      type: "Van",
      price: 150, // Daily rental price based on the website linked in the search results
      available: true, // Availability unknown without contacting the rental company
      image: "/cars/car3.jpg", // Replace with actual image path
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
      id: 4, // Changed to avoid potential conflicts
      name: "Toyota Coaster",
      type: "Bus",
      price: "", // Price unavailable without contacting rental companies
      available: true, // Availability unknown without contacting rental companies
      image: "/cars/car5.jpg", // Replace with actual image path
    },
    {
      id: 5, // Changed to avoid potential conflicts
      name: "Toyota Hilux",
      type: "Pick-up",
      price: 25000, // This is an estimate, you can find the actual price online
      available: true, // Availability depends on dealership
      image: "/cars/car6.jpg", // Replace with actual image path
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

  // The Logic
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filteredCars = cars
    .filter((car) => car.name.toLowerCase().includes(search.toLowerCase()))
    .filter((car) => (filter ? car.type === filter : true))
    .sort((a, b) => {
      if (sort === "price-asc") {
        return a.price - b.price;
      } else if (sort === "price-desc") {
        return b.price - a.price;
      }
      return 0;
    });
  return (
    <>
      <div className="container mx-auto p-6 mt-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Available <span className="text-orange-500">Cars</span> for Rent
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around gap-2 mb-10 space-y-4 md:space-y-0">
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="w-full md:w-1/3  p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
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
          <div className="w-full md:w-1/3 p-2 border border-stone-800 rounded-lg shadow-sm  focus:ring-2 focus:ring-blue-500">
            <input
              type="text"
              placeholder="Search by brand name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full focus:outline-none"
            />
          </div>
          {/* <select
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
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
              {/* <p className="text-gray-600 mb-4">Price: ${car.price}/day</p> */}
              <p
                className={`text-sm font-medium ${
                  car.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {car.available ? "Available" : "Not Available"}
              </p>
              <p className="text-sm font-medium mt-2">Phone: +251 911130416</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
