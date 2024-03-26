"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <>
      <div>
        {/* outer hero */}
        <div>
          <Carousel
            showThumbs={false}
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
          >
            <div>
              <img
                className="w-full h-auto bg-cover"
                src="https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 1"
              />
            </div>
            <div>
              <img
                className="w-full h-auto bg-cover"
                src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 2"
              />
            </div>

            <div>
              <img
                className="w-full h-auto bg-cover"
                src="https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 4"
              />
            </div>
            <div>
              <img
                className="w-full h-auto bg-cover"
                src="https://images.pexels.com/photos/1046227/pexels-photo-1046227.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 3"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;
