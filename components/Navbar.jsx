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
      <div className="py-1 shadow-lg bg-white w-full sticky top-0 z-50 ">
        {/* inside nav */}
        <div className="flex justify-between  mt-4 mb-4 ml-3 mr-3 lg:ml-48 lg:mr-48 text-black">
          <div className="flex gap-3 items-center">
            {/* Logo */}
            <div>
              <Image
                src={"/logo/drive.png"}
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <span>
              <Link href={"/"}>
                <h1 className="text-4xl font-bold">Go Drive</h1>
              </Link>
            </span>
          </div>
          {/* Menu for larger screens */}
          <ul className="hidden lg:flex justify-center gap-5 items-center text-2xl cursor-pointer ">
            <Link href={"/"}>
              <li className="hover:text-orange-600 hover:border-b-2  border-orange-600">
                Home
              </li>
            </Link>
            <Link href={"/rental"}>
              <li className="hover:text-orange-600 hover:border-b-2  border-orange-600">
                Rental
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-orange-600 hover:border-b-2  border-orange-600">
                About
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:text-orange-600 hover:border-b-2  border-orange-600">
                Contact
              </li>
            </Link>
          </ul>
          {/* Burger menu icon */}
          <div className="lg:hidden flex justify-center items-center">
            {isMenuOpen ? (
              <FaTimes
                size={25}
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            ) : (
              <FaBars
                size={25}
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        {/* Menu for smaller screens */}
        {isMenuOpen && (
          <>
            <ul className="lg:hidden flex flex-col gap-4 items-center text-2xl cursor-pointer">
              <Link href={"/"}>
                <li className="hover:text-orange-600">Home</li>
              </Link>
              <Link href={"/rental"}>
                <li className="hover:text-orange-600">Rental</li>
              </Link>
              <Link href={"/about"}>
                <li className="hover:text-orange-600">About</li>
              </Link>
              <Link href={"/contact"}>
                <li className="hover:text-orange-600">Contact</li>
              </Link>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
