"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <>
      <div>
        {/* outer hero */}
        <div className="relative">
          <Carousel
            showThumbs={false}
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
          >
            <div>
              <img
                className="w-full h-[100vh] bg-cover"
                src="https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 1"
              />
            </div>
            <div>
              <img
                className="w-full h-[100vh] bg-cover"
                src="https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 2"
              />
            </div>

            <div>
              <img
                className="w-full h-[100vh] bg-cover"
                src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 4"
              />
            </div>
            <div>
              <img
                className="w-full h-[100vh] bg-cover"
                src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 3"
              />
            </div>
          </Carousel>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
