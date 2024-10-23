"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between p-8"
      id="about"
    >
      {/* Image Section */}

      <div className="about-col-1 md:w-1/2 mb-8 md:mb-0 md:mr-8 flex justify-center">
        <Image
          src="/images/mypic.jpg"
          alt="My Picture"
          width={345}
          height={345}
          className="rounded-full object-cover w-3/4 sm:w-1/2 md:w-1/3"
        />
      </div>

      {/* Text Section */}
      <div className="about-col-2 md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-8 max-w-2xl mx-auto md:mx-0">
          I'm a dedicated MERN Stack Developer, driven by the passion to create
          user-centric and visually captivating websites. My core skills include
          HTML, CSS, and JavaScript, with a strong focus on enhancing user
          experiences. Currently, I'm mastering React JS for dynamic and
          interactive interfaces. I'm also actively expanding my expertise in
          full-stack development, exploring Node.js to build efficient web
          applications. In addition to my development pursuits, I'm currently
          delving into Generative AI and TypeScript to broaden my skill set and
          stay ahead in the ever-evolving tech landscape.
        </p>

        {/* Tab Navigation */}
        <div className="tab-titles flex space-x-8 relative justify-center md:justify-start">
          <p
            className={`tab-links relative cursor-pointer transition duration-500 ${activeTab === "skills" ? "active-link text-customGreen" : ""
              }`}
            onClick={() => opentab("skills")}
          >
            Skills
          </p>

          <p
            className={`tab-links relative cursor-pointer transition duration-500 ${activeTab === "experience" ? "active-link text-customGreen" : ""
              }`}
            onClick={() => opentab("experience")}
          >
            Experience
          </p>
          <p
            className={`tab-links relative cursor-pointer transition duration-500 ${activeTab === "education" ? "active-link text-customGreen" : ""
              }`}
            onClick={() => opentab("education")}
          >
            Education
          </p>
        </div>

        {/* Tab Content */}
        <div className="tab-contents">
          {activeTab === "skills" && (
            <div id="skills" className="active-tab">
              <ul className="list-none pl-8 mt-6">
                <li className="mb-4">
                  <span className="font-bold text-customGreen">UI/UX</span>
                  <br /> Designing Web/App interfaces
                </li>
                <li className="mb-4">
                  <span className="font-bold text-customGreen">
                    Front-End Development
                  </span>
                  <br /> Web/App Development
                </li>
                <li className="mb-4">
                  <span className="font-bold text-customGreen">
                    Responsive Web Design
                  </span>
                  <br /> Creating mobile-friendly websites
                </li>
              </ul>
            </div>
          )}

          {activeTab === "experience" && (
            <div id="experience" className="active-tab">
              <ul className="list-none pl-8 mt-6">
                <li className="mb-4">
                  <span className="font-bold text-customGreen">
                    Web Developer Intern
                  </span>
                  <br /> Saylani Mass IT Training
                  <span className="text-customGreen">
                    {" "}
                    (August 2023 - Dec 2023)
                  </span>
                </li>
                <li className="mb-4">
                  <span className="font-bold text-customGreen">
                    Remote Web/App Developer Intern
                  </span>
                  <br /> CodeSoft
                  <span className="text-customGreen">
                    {" "}
                    (Sept 20 - Oct 20, 2023)
                  </span>
                </li>
                <li className="mb-4">
                  <span className="font-bold text-customGreen">
                    Remote Web Developer Intern
                  </span>
                  <br /> TechnoHacks
                  <span className="text-customGreen">
                    {" "}
                    (Oct 1 - Oct 30, 2023)
                  </span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === "education" && (
            <div id="education" className="active-tab">
              <ul className="list-none pl-8 mt-6">
                <li className="mb-4">
                  <span className="font-bold text-customGreen">
                    Federal Urdu University of Arts, Sciences & Technology
                  </span>
                  <br /> Bachelor of Computer Science (BSCS)
                  <span className="text-customGreen"> (2023 - Present)</span>
                </li>
                <li className="mb-4">
                  <span className="font-bold text-customGreen">
                    Governor Sindh Initiative For AI, WEB 3.0 & Metaverse
                  </span>
                  <br /> Generative AI Engineer
                  <span className="text-customGreen">(2024 - Present)</span>
                </li>
                <li className="mb-4">
                  <span className="font-bold text-customGreen">
                    Saylani Mass IT Training
                  </span>
                  <br /> MERN Stack Web Development
                  <span className="text-customGreen">(2022 - 2023)</span>
                </li>
                <li className="mb-4">
                  <span className="font-bold text-customGreen">
                    Fazaia Degree College Faisal
                  </span>
                  <br /> Pre-Engineering
                  <span className="text-customGreen">(2020 - 2022)</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
