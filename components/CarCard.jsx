import React from "react";

const CarCard = ({ img, title, price }) => {
  return (
    <>
      <div className="p-4 flex flex-col items-center w-full md:w-96">
        {/* Changed to flex, centered items */}
        <img src={img} alt="Featured Car" className="rounded-lg w-full h-60" />
        <div className="text-center font-bold text-red-600">
          <h1 className="text-3xl px-1 py-3">{title}</h1>
          <h3 className="text-xl p-1">{price}</h3>
          <button className="text-black p-3 mt-1 rounded-md border-2 border-red-500  hover:border-blue-800 hover:animate-pulse ">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default CarCard;
