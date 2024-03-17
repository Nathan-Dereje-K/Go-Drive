import React from "react";
import Link from "next/link";
const Filler = () => {
  return (
    <>
      <div className="text-center mt-32">
        <h1 className="font-bold text-5xl">Ready to ride ?</h1>
        <p>Find the perfect ride for your next adventure!</p>
        <Link href={"/service"}>
          <button className="mt-3 p-3 border bg-blue-500 hover:bg-blue-500 hover:animate-pulse hover:border-orange-700 rounded-md text-white">
            See all car options
          </button>
        </Link>
      </div>
    </>
  );
};

export default Filler;
