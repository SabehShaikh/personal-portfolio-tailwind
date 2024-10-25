"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tab-links bg-[#309d61] p-4 w-full">
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

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-[#309d61] md:bg-transparent p-4 md:p-0 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <li className="relative">
              <Link href="/" className="tab-links  transition duration-300">
                Home
                <span></span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/about"
                className="tab-links  transition duration-300"
              >
                About
                <span></span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/services"
                className="tab-links  transition duration-300"
              >
                Services
                <span></span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/portfolio"
                className="tab-links  transition duration-300"
              >
                Portfolio
                <span></span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/contact"
                className="tab-links transition duration-300"
              >
                Contact
                <span></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
