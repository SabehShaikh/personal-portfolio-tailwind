"use client";

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu} from "lucide-react";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="tab-links bg-black p-3 w-full">
      <nav className="flex justify-between items-center px-5 md:px-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/sabe_shaikh-removebg-preview (1).png"
            alt="logo"
            width={175}
            height={85}
          />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
  <Sheet>
    <SheetTrigger>
      <button className="text-white focus:outline-none">
        <Menu className="w-6 h-6 text-white" />
      </button>
    </SheetTrigger>

    <SheetContent side="right" className="bg-black text-white p-6">
      {/* Header Section with Close Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Menu</h2>
        {/* Close Button
        <SheetClose>
          <button className="text-white text-2xl">&times;</button>
        </SheetClose> */}
      </div>

      {/* Menu Links */}
      <ul className="space-y-6">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="block text-base font-medium transition duration-300 hover:text-gray-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </SheetContent>
  </Sheet>
</div>



        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white text-base font-medium transition duration-300 hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
