import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Link from "next/link";
import CarCard from "@/components/CarCard";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Card />
      {/* <div className="m-16 text-4xl font-bold text-center"></div> */}

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-12">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>

      <Hero />

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
