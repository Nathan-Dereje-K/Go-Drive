import React from "react";

const Card = () => {
  return (
    <>
      <div className="text-black flex flex-col lg:flex-row justify-center gap-8 w-full">
        {/*content*/}
        <div className="text-lg w-full lg:w-1/2 md:w-full\">
          <h1 className="text-center text-black text-3xl md:text-5xl font-bold">
            Welcome To <span className="text-orange-600">Go Drive</span> Car
            Rental Excellence
            <p className="text-red-600 text-xl mt-3 text-center">
              Elevating Standards
            </p>
          </h1>
          <div className="mt-10">
            {/* Overview */}
            <p>
              Go Drive Car Rentals is a rapidly growing company providing
              high-quality, reliable, and affordable rental vehicles across the
              region. With a diverse fleet including sedans, SUVs, vans, buses,
              pickups, and luxury cars, we offer a wide range of options to meet
              every customer's needs.
            </p>
            {/* Mission */}
            <p>
              Our mission at Go Drive is to deliver a hassle-free and enjoyable
              car rental experience. We achieve this by prioritizing top-notch
              customer service, maintaining our vehicles to the highest
              standards, and offering competitive pricing. Our goal is to exceed
              our customers' expectations and ensure their satisfaction with
              every rental.
            </p>
          </div>
        </div>
        {/*image */}
        <div className="flex items-center w-full lg:w-1/2 md:w-full">
          <img
            className="rounded-lg"
            src="/cars/car1.jpg"
            alt="Family trip with a car"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
