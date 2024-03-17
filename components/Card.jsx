import React from "react";

const Card = () => {
  return (
    <>
      <div className="mt-9">
        <h1 className="text-center text-black text-3xl md:text-5xl font-bold">
          Why rent with Go Drive?
        </h1>
        <div className=" text-black flex flex-col lg:flex-row justify-center w-full">
          {/*content*/}
          <div className="text-lg w-full lg:w-1/2 md:w-full p-8  md:p-14 lg:px-20 lg:py-28">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            consectetur nisi eveniet esse sunt minima beatae, perspiciatis
            impedit magni deserunt. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Rerum consectetur nisi eveniet esse sunt minima
            beatae, perspiciatis impedit magni deserunt. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Rerum consectetur nisi eveniet
            esse sunt minima beatae, perspiciatis impedit magni deserunt.
          </div>
          {/*image */}
          <div className="p-11 md:p-14 lg:p-20 w-full lg:w-1/2 md:w-full">
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
