"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Assuming you're using react-icons
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* outer nav */}
      <div className="py-2 shadow-lg bg-white w-full">
        {/* inside nav */}
        <div className="flex justify-between m-5 text-black">
          <div className="flex gap-3 items-center">
            {/* Logo */}
            <div>
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
          {/* Menu for larger screens */}
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
          {/* Burger menu icon */}
          <div className="md:hidden flex justify-center items-center">
            {isMenuOpen ? (
              <FaTimes
                size={30}
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            ) : (
              <FaBars
                size={30}
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        {/* Menu for smaller screens */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 items-center text-2xl cursor-pointer">
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
        )}
      </div>
    </>
  );
};

export default Navbar;
