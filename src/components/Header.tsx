"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 p-4 w-full">
      <nav className="flex justify-between items-center px-10">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Image
            src="/images/sabe_shaikh-removebg-preview (1).png"
            alt="logo"
            width={175}
            height={85}
          />
        </div>

        {/* Hamburger menu button (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" /> // Close icon when menu is open
            ) : (
              <FaBars className="w-6 h-6" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>

        {/* Links for both desktop and mobile */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-green-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-green-300 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-green-300 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:text-green-300 transition duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-green-300 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
