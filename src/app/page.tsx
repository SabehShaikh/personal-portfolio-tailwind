import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I am <span className="text-[#C6F67E]">Sabeh</span> <br /> Shaikh From Pakistan
        </h1>
        <p className="text-xl md:text-2xl mt-4">MERN Stack Developer</p>
      </div>

      {/* Welcome Message */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-2">Welcome to My Portfolio</h2>
        <p className="text-lg">
          I specialize in creating responsive and dynamic web applications using the MERN stack. Explore my skills and projects below!
        </p>
      </div>

      {/* Skills Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-2">What I Do</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>MERN Stack Development</li>
          <li>Responsive Web Design</li>
          <li>RESTful APIs</li>
          <li>Database Management</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-2">Let's Work Together!</h2>
        <Link href="/contact" className="text-[#C6F67E] hover:text-[#9fcc67] hover:underline transition">
          Get in touch!
        </Link>
      </div>

      {/* Social Links */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-2">Connect with Me</h2>
        <p className="text-lg">
          Follow me on:
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C6F67E] hover:text-[#9fcc67] hover:underline ml-1 transition"
          >
            LinkedIn
          </a>
          ,
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C6F67E] hover:text-[#9fcc67] hover:underline ml-1 transition"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
