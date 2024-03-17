import Link from "next/link";
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
            <Link href={"/"}>
              <li className="hover:text-cyan-600">Home</li>
            </Link>
            <Link href={"/service"}>
              <li className="hover:text-cyan-600">Service</li>
            </Link>
            <Link href={"/fleet"}>
              <li className="hover:text-cyan-600">Fleet</li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:text-cyan-600">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
