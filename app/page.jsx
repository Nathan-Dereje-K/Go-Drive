import Header from "@/components/Header";
import Card from "@/components/Card";
import Link from "next/link";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import CarCard from "@/components/CarCard";
import { BiHappyAlt } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LiaToolsSolid } from "react-icons/lia";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="ml-4 mr-4 md:ml-11 md:mr-11 lg:mr-[10vh] lg:ml-[10vh]  mt-24">
        <Card />
      </div>
      {/* <div className="m-16 text-4xl font-bold text-center"></div> */}

      <div className="w-full flex justify-start items-center mt-14">
        <h2 className="ml-4 md:ml-11 lg:ml-[10vh]  text-black text-3xl md:text-5xl font-bold">
          Discover
        </h2>
      </div>
      <div className="w-full h-full flex justify-center mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-12">
          <CarCard
            img={"cars/car6.jpg"}
            title={"Pick-Up"}
            price={"From $50 a Day"}
          />
          <CarCard
            img={"cars/car2.jpg"}
            title={"Economy"}
            price={"From $50 a Day"}
          />
          <CarCard
            img={"cars/car4.jpg"}
            title={"High Roof"}
            price={"From $50 a Day"}
          />
          <CarCard
            img={"cars/car5.jpg"}
            title={"Bus"}
            price={"From $50 a Day"}
          />
        </div>
      </div>

      {/* this is the promise div */}
      <div className="mt-20 flex flex-col ">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-black">
          Our Promise
        </h2>
        {/* outer promise card */}
        <div className="mt-16 w-full  ">
          {/* promise cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-7 ">
            {/* single card */}
            <div className="flex flex-col border p-4 lg:p-10 hover:animate-pulse gap-3 rounded-lg shadow-md bg-white w-96 md:w-auto">
              <div className="flex justify-center item-center ">
                <FaRegMoneyBill1
                  className="text-red-500 hover:text-blue-700"
                  size={50}
                />
              </div>
              <h2 className="text-xl font-bold text-center">
                Good Price & Quality Service
              </h2>
            </div>

            {/* single card */}
            <div className="flex flex-col border p-4 lg:p-10 hover:animate-pulse gap-3 rounded-lg shadow-md bg-white w-96 md:w-auto">
              <div className="flex justify-center item-center ">
                <RiCustomerService2Fill
                  className="text-red-500 hover:text-blue-700"
                  size={50}
                />
              </div>
              <h2 className="text-xl font-bold text-center">
                Reliable Customer Support
              </h2>
            </div>

            {/* single card */}
            <div className="flex flex-col border p-4 lg:p-10 hover:animate-pulse gap-3 rounded-lg shadow-md bg-white w-96 md:w-auto">
              <div className="flex justify-center item-center ">
                <LiaToolsSolid
                  className="text-red-500 hover:text-blue-700"
                  size={50}
                />
              </div>
              <h2 className="text-xl font-bold text-center">
                Constantly Maintained Cars
              </h2>
            </div>

            {/* single card */}
            <div className="flex flex-col border p-4 lg:p-10 hover:animate-pulse gap-3 rounded-lg shadow-md bg-white w-96 md:w-auto">
              <div className="flex justify-center item-center ">
                <BiHappyAlt
                  className="text-red-500 hover:text-blue-700"
                  size={50}
                />
              </div>
              <h2 className="text-xl font-bold text-center">
                Satisfaction Guaranteed
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* customer lists */}
      <div className="mt-28 gap-5">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-black ">
          Customers
        </h1>
        <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8 lg:gap-12 mt-16 mx-2 sm:mx-4">
          <div className="w-64 md:w-80 h-40 md:h-48 relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              src="/images/customer.png"
              alt="Customer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 md:w-80 h-40 md:h-48 relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              src="/images/custormer1.png"
              alt="Customer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 md:w-80 h-40 md:h-48 relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              src="/images/customer2.png"
              alt="Customer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 md:w-80 h-40 md:h-48 relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              src="/images/customer3.png"
              alt="Customer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 md:w-80 h-40 md:h-48 relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              src="/images/customer4.png"
              alt="Customer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ready to ride */}

      <div className="text-center mt-32 mb-20">
        <h1 className="font-bold text-7xl  text-black">Ready to ride ?</h1>
        <p className="mt-1">Find the perfect ride for your next adventure!</p>
        <Link href={"/fleet"}>
          <button className="mt-3 p-3 border bg-blue-500 hover:bg-blue-500 hover:animate-pulse rounded-md text-white">
            See all car options
          </button>
        </Link>
      </div>
    </main>
  );
}
