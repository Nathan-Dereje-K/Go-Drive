import React from "react";

const Card = () => {
  return (
    <>
      <div className=" mr-4 ml-4 lg:mr-[10vh] lg:ml-[10vh]">
        <div className=" text-black flex flex-col lg:flex-row justify-center gap-8 w-full">
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              consectetur nisi eveniet esse sunt minima beatae, perspiciatis
              impedit magni deserunt. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Rerum consectetur nisi eveniet esse sunt minima
              beatae, perspiciatis impedit magni deserunt. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Rerum consectetur nisi
              eveniet esse sunt minima beatae, perspiciatis impedit magni
              deserunt.
            </div>
          </div>
          {/*image */}
          <div className=" flex items-center w-full lg:w-1/2 md:w-full">
            <img
              className="rounded-lg"
              src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Family trip with a car"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
