"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function RentalPage() {
  const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      type: "Sedan",
      price: 40,
      available: true,
      image:
        "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      phone: "+0912345678",
    },
    {
      id: 2,
      name: "Ford Expedition",
      type: "SUV",
      price: 60,
      available: true,
      image:
        "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      phone: "+0912345678",
    },
    {
      id: 3,
      name: "Chevrolet Impala",
      type: "Luxury",
      price: 80,
      available: false,
      image:
        "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      phone: "+0912345678",
    },

    // Add more car data here...
    {
      id: 4,
      name: "Bus",
      type: "Bus",
      price: 80,
      available: false,
      image:
        "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      phone: "+0912345678",
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-10 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-2 py-2 border border-stone-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch size={25} className=" text-gray-700" />
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="w-full md:w-1/3 px-9 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Luxury">Luxury</option>
            <option value="Economy">Economy</option>
            <option value="Bus">Bus</option>
            <option value="Pick-up">Pick-up</option>
          </select>
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
              <p className="text-sm font-medium mt-2">Phone: {car.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
