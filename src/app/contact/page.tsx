// components/Contact.tsx

import React from "react";
import {
  FaPaperPlane,
  FaHeart,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="contact py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="contact-left flex-1 lg:mr-8">
            <h1 className="sub-title text-3xl font-bold mb-4">Contact Me</h1>
            <p className="mt-8 text-lg">
              <FaPaperPlane className="text-[#C6F67E] inline mr-4 text-2xl" />
              sabehshaikh201@gmail.com
            </p>
            <div className="social-icons mt-8 flex">
              <Link
                href="https://www.facebook.com/Sabeh420/"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-gray-400 text-3xl mr-5 transition-transform transform hover:text-[#C6F67E] hover:translate-y-[-5px]" />
              </Link>
              <Link
                href="https://twitter.com/shaikh_sabeh"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-gray-400 text-3xl mr-5 transition-transform transform hover:text-[#C6F67E] hover:translate-y-[-5px]" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sabeh-shaikh-016623245/"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-gray-400 text-3xl mr-5 transition-transform transform hover:text-[#C6F67E] hover:translate-y-[-5px]" />
              </Link>
              <Link href="https://github.com/SabehShaikh" aria-label="GitHub">
                <FaGithub className="text-gray-400 text-3xl mr-5 transition-transform transform hover:text-[#C6F67E] hover:translate-y-[-5px]" />
              </Link>
            </div>
            <Link
              href="/Images/SabehShaikhUpdatedResume.pdf"
              download
              className="btn btn2 mt-6 inline-block bg-[#C6F67E] text-gray-800 py-2 px-4 rounded-lg hover:bg-[#A6D94D] transition"
            >
              Download CV
            </Link>
          </div>

          {/* Right Section */}
          <div className="contact-right flex-1">
            <form name="submit-to-google-sheet" className="mt-4">
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                required
                className="w-full border-0 outline-none bg-[#262626] text-white p-4 mb-4 rounded-lg"
              />
              <input
                type="email"
                name="Email"
                placeholder="Enter Your Email"
                required
                className="w-full border-0 outline-none bg-[#262626] text-white p-4 mb-4 rounded-lg"
              />
              <textarea
                name="Message"
                rows={6}
                placeholder="Your Message"
                className="w-full border-0 outline-none bg-[#262626] text-white p-4 mb-4 rounded-lg"
              />
              <button
                type="submit"
                className="btn btn2 bg-[#C6F67E] text-gray-800 py-2 px-6 rounded-lg hover:bg-[#A6D94D] transition"
              >
                Submit
              </button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>

      {/* <div className="copyright text-center py-4 bg-[#262626] mt-8">
                <p className="text-gray-400 flex items-center justify-center">
                    Copyright © Sabeh Shaikh <FaHeart className="text-[#C6F67E] ml-2" />
                </p>
            </div> */}
    </div>
  );
}


