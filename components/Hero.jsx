"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <Carousel
          showThumbs={false}
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
        >
          <div className="relative w-full h-[50vh] overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src="https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 1"
            />
          </div>
          <div className="relative w-full h-[50vh] overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src="https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 2"
            />
          </div>
          <div className="relative w-full h-[50vh] overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src="https://images.pexels.com/photos/1054211/pexels-photo-1054211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 3"
            />
          </div>
          <div className="relative w-full h-[50vh] overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 4"
            />
          </div>
        </Carousel>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;
