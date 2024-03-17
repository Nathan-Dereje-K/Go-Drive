import Image from "next/image";
const Navbar = () => {
  return (
    <>
      {/* outer nav */}
      <div className="py-2 shadow-lg w-full  ">
        {/* inside nav */}
        <div className="flex justify-between m-5 text-black">
          <div className="flex gap-3 items-center">
            {/*  */}
            <div className="">
              <Image
                src={"/images/logo.png"}
                className="rounded-full"
                alt="Logo"
                width={70}
                height={30}
              />
            </div>
            <span>
              <h1 className="text-4xl font-bold">Go Drive</h1>
            </span>
          </div>
          <ul className="hidden md:flex justify-center gap-4 items-center text-2xl cursor-pointer ">
            <li className="hover:text-cyan-600">Home</li>
            <li className="hover:text-cyan-600">Service</li>
            <li className="hover:text-cyan-600">Fleet</li>
            <li className="hover:text-cyan-600">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
