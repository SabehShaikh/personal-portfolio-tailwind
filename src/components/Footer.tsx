import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/sabeh-shaikh-016623245/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/SabehShaikh",
      label: "GitHub",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/shaikh_sabeh",
      label: "Twitter",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/Sabeh420/",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 border-b border-gray-800 pb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/sabe_shaikh-removebg-preview (1).png"
                width={200}
                height={200}
                alt="Sabeh Shaikh Logo"
                className="transition-all duration-300"
              />
            </Link>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Transforming ideas into elegant digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            {quickLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <TooltipProvider>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sabeh Shaikh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
