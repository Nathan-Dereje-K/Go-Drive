import Header from "@/components/Header";
import Card from "@/components/Card";
import Link from "next/link";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import CarCard from "@/components/CarCard";
import { BiHappyAlt } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LiaCertificateSolid, LiaToolsSolid } from "react-icons/lia";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="mt-24">
        <Card />
      </div>
      {/* <div className="m-16 text-4xl font-bold text-center"></div> */}

      <div className="w-full flex justify-center items-center mt-14">
        <button className="w-56  p-4 rounded-md border border-blue-500 hover:border-orange-700 text-black text-lg font-bold">
          Discover
        </button>
      </div>
      <div className="w-full flex justify-center mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-12">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>

      {/* this is the promise div */}
      <div className="mt-20 flex flex-col ">
        <h2 className="text-center text-7xl font-bold text-black">
          Our Promise
        </h2>
        {/* outer promise card */}
        <div className="mt-16 w-full  ">
          {/* promise cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-7 ">
            {/* single card */}
            <div className="flex flex-col border p-4 lg:p-10 hover:border-orange-700 gap-3 rounded-lg shadow-md bg-white w-96 md:w-auto">
              <div className="flex justify-center item-center ">
                <FaRegMoneyBill1
                  className="text-red-500 hover:text-blue-700"
                  size={50}
                />
              </div>
              <h2 className="text-xl font-bold">
                Good Price & Quality Service
              </h2>
            </div>

            {/* single card */}
            <div className="flex flex-col border p-4 lg:p-10 hover:border-orange-700 gap-3 rounded-lg shadow-md bg-white w-96 md:w-auto">
              <div className="flex justify-center item-center ">
                <RiCustomerService2Fill
                  className="text-red-500 hover:text-blue-700"
                  size={50}
                />
              </div>
              <h2 className="text-xl font-bold">Reliable Customer Support</h2>
            </div>

            {/* single card */}
            <div className="flex flex-col border p-4 lg:p-10 hover:border-orange-700 gap-3 rounded-lg shadow-md bg-white w-96 md:w-auto">
              <div className="flex justify-center item-center ">
                <LiaToolsSolid
                  className="text-red-500 hover:text-blue-700"
                  size={50}
                />
              </div>
              <h2 className="text-xl font-bold">Constantly Maintained Cars</h2>
            </div>

            {/* single card */}
            <div className="flex flex-col border p-4 lg:p-10 hover:border-orange-700 gap-3 rounded-lg shadow-md bg-white w-96 md:w-auto">
              <div className="flex justify-center item-center ">
                <BiHappyAlt
                  className="text-red-500 hover:text-blue-700"
                  size={50}
                />
              </div>
              <h2 className="text-xl font-bold">Satisfaction Guaranteed</h2>
            </div>
          </div>
        </div>
      </div>
      {/* customer lists */}
      <div className="mt-16 gap-3">
        <h1 className="text-center font-bold text-5xl mt-16">Customers</h1>
        <div className=" flex justify-center items-center flex-col md:flex-row gap-4 mt-14">
          <div className="w-80  h-48 ">
            <img src="/images/customer.png" alt="Customer" />
          </div>
          <div className="w-80 h-48 ">
            <img src="/images/custormer1.png" alt="Customer" />
          </div>
          <div className="w-80 h-48 ">
            <img src="/images/customer2.png" alt="Customer" />
          </div>
          <div className="w-80 h-48 ">
            <img src="/images/customer3.png" alt="Customer" />
          </div>
          <div className="w-80 h-48 ">
            <img src="/images/customer4.png" alt="Customer" />
          </div>
        </div>
      </div>

      {/* ready to ride */}

      <div className="text-center mt-32 mb-20">
        <h1 className="font-bold text-5xl">Ready to ride ?</h1>
        <p className="mt-1">Find the perfect ride for your next adventure!</p>
        <Link href={"/service"}>
          <button className="mt-3 p-3 border bg-blue-500 hover:bg-blue-500 hover:animate-pulse hover:border-orange-700 rounded-md text-white">
            See all car options
          </button>
        </Link>
      </div>
    </main>
  );
}
