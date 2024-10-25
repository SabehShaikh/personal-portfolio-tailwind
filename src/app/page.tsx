import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I am <span className="text-[#C6F67E]">Sabeh</span> Shaikh
          <br /> From Pakistan
        </h1>
        <p className="text-xl md:text-2xl mt-2">MERN Stack Developer</p>
      </div>

      {/* Welcome Message */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Welcome to My Portfolio</h2>
        <p className="text-lg mt-2">
          I specialize in creating responsive and dynamic web applications using
          the MERN stack. Explore my skills and projects below!
        </p>
      </div>

      {/* Skills Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">What I Do</h2>
        <ul className="list-disc list-inside mt-2 space-y-1 text-lg">
          <li>MERN Stack Development</li>
          <li>Responsive Web Design</li>
          <li>UI/UX Design</li>
          <li>Database Management</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-2">Let's Work Together!</h2>
        <Link
          href="/contact"
          className=" text-[#C6F67E] hover:text-[#9fcc67]  underline transition"
        >
          Get in touch!
        </Link>
      </div>

      {/* Social Links */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Connect with Me</h2>
        <p className="text-lg mt-2">
          Follow me on:
          <a
            href="https://www.linkedin.com/in/sabeh-shaikh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C6F67E] hover:text-[#9fcc67] underline ml-1 transition"
          >
            LinkedIn
          </a>
          ,
          <a
            href="https://github.com/SabehShaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C6F67E] hover:text-[#9fcc67] underline ml-1 transition"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
