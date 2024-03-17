import React from "react";

const Header = () => {
  return (
    <>
      <div className="relative h-[90vh]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/3764000/pexels-photo-3764000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="absolute bottom-60 left-16 text-white z-20">
          <h2 className="text-6xl  md:text-7xl lg:text-8xl">
            Go <span className="text-orange-500">Drive</span>
          </h2>
          <p className="text-lg font-medium pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            molestias!
          </p>
        </div>
        <div className="bg-black opacity-60 absolute inset-0 z-10"></div>
      </div>
    </>
  );
};

export default Header;
