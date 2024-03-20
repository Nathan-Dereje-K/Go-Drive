import React from "react";

const CarCard = () => {
  return (
    <>
      <div className="p-4 flex flex-col items-center w-full md:w-96">
        {" "}
        {/* Changed to flex, centered items */}
        <img
          src="https://images.pexels.com/photos/9739260/pexels-photo-9739260.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Featured Car"
          className="rounded-lg"
        />
        <div className="text-center font-bold text-red-600">
          <h1 className="text-3xl px-1 py-3">Economy</h1>
          <h3 className="text-xl p-1">From $50 a Day</h3>
          <button className="text-black p-3 mt-1 rounded-md border-2 border-red-500  hover:border-blue-800 hover:animate-pulse ">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default CarCard;
