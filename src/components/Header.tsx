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
    <div className="tab-links bg-[#309d61] p-3 w-full">
      <nav className="flex justify-between items-center px-5 md:px-10">
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
              <FaTimes className="w-6 h-6" /> // Close icon
            ) : (
              <FaBars className="w-6 h-6" /> // Open icon
            )}
          </button>
        </div>

        {/* Sliding menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[40%] bg-[#309d61] p-8 transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:static md:w-auto md:p-0 md:flex md:space-x-8 z-10`}
        >
          <div className="absolute top-4 right-4 md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <FaTimes className="w-5 h-5" />
              {/* Close button inside the menu */}
            </button>
          </div>
          <ul className="flex flex-col font-bold text-sm md:text-base md:font-normal text md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <li>
              <Link href="/" className="transition duration-300">
                Home
                <span></span>
              </Link> 
            </li>
            <li>
              <Link href="/about" className="transition duration-300">
                About
                <span></span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition duration-300">
                Services
                <span></span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="transition duration-300">
                Portfolio
                <span></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition duration-300">
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
