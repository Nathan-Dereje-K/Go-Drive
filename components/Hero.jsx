"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <>
      <div>
        <h1 className=" ml-8 md:ml-20 lg:ml-32 text-5xl font-bold">Featured</h1>
        {/* outer hero */}
        <div className="mr-6 ml-6 md:mr-20 md:ml-20 lg:mr-32 lg:ml-32 border rounded-s-2xl mt-6 ">
          <Carousel
            showThumbs={false}
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
          >
            <div>
              <img
                className="rounded-lg w-[90vh] h-[80vh]"
                src="https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 1"
              />
            </div>
            <div>
              <img
                className="rounded-lg w-[90vh] h-[80vh]"
                src="https://images.pexels.com/photos/10187150/pexels-photo-10187150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 2"
              />
            </div>
            <div>
              <img
                className="rounded-lg w-[90vh] h-[80vh]"
                src="https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 3"
              />
            </div>
            <div>
              <img
                className="rounded-lg w-[90vh] h-[80vh]"
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 4"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;
