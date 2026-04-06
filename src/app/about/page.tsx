"use client";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Briefcase,
  GraduationCap,
  Cpu,
  Layout,
  Server,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const tabData = {
    skills: [
      {
        icon: <Layout className="text-primary mr-2 w-5 h-5" />,
        title: "Frontend Development",
        description: "React.js, Next.js, Tailwind CSS, TypeScript",
      },
      {
        icon: <Server className="text-primary mr-2 w-5 h-5" />,
        title: "Backend Development",
        description: "Node.js, Express, FastAPI, PostgreSQL, MongoDB",
      },
      {
        icon: <Cpu className="text-primary mr-2 w-5 h-5" />,
        title: "AI & Generative AI",
        description: "RAG pipelines, LLM integration, Groq, Qdrant, Gemini APIs",
      },
      {
        icon: <Smartphone className="text-primary mr-2 w-5 h-5" />,
        title: "Responsive & UI Design",
        description: "Mobile-first design, component-driven UI, clean UX",
      },
      {
        icon: <Code className="text-primary mr-2 w-5 h-5" />,
        title: "Dev Tools & Deployment",
        description: "Git, Vercel, Docker, Postman, Cloudinary",
      },
    ],
    experience: [
      {
        title: "Web Developer Intern",
        company: "Saylani Mass IT Training",
        period: "Aug 2023 - Dec 2023",
      },
      {
        title: "Remote Web/App Developer Intern",
        company: "CodeSoft",
        period: "Sept - Oct 2023",
      },
      {
        title: "Remote Web Developer Intern",
        company: "TechnoHacks",
        period: "Oct 2023",
      },
    ],
    education: [
      {
        title: "Bachelor of Computer Science (BSCS)",
        institution: "Federal Urdu University",
        period: "2023 - Present",
      },
      {
        title: "Generative AI Engineer",
        institution: "Governor Sindh Initiative",
        period: "Feb 2024 - Present",
      },
      {
        title: "MERN Stack Web Development",
        institution: "Saylani Mass IT Training",
        period: "Jan 2023 - Dec 2023",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/my_pic.png"
            alt="Sabeh Shaikh"
            width={400}
            height={400}
            className="rounded-full object-contain w-64 h-64 md:w-80 md:h-80 shadow-lg"
          />
        </div>

        {/* About Content */}
        <div>
          <h1 className="text-4xl text-center md:text-left font-bold mb-6">
            About Me
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I&apos;m a Computer Science student at Federal Urdu University,
            Karachi, with hands-on experience in full stack web development and
            a growing focus on AI integration. I&apos;ve built and deployed
            real-world projects — from e-commerce platforms to RAG-powered
            chatbots — and I&apos;m comfortable working across the stack, from
            Next.js frontends to FastAPI backends. Currently deepening my skills
            in Generative AI through the Governor Sindh Initiative and applying
            them in practical, shipped projects.
          </p>

          {/* Tabs */}
          <Tabs
            defaultValue="skills"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="skills"
                className={activeTab === "skills" ? "bg-primary" : ""}
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className={activeTab === "experience" ? "bg-primary" : ""}
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className={activeTab === "education" ? "bg-primary" : ""}
              >
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <div className="grid md:grid-cols-2 gap-4">
                {tabData.skills.map((skill, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader className="flex flex-row items-center space-x-2 pb-2">
                      {skill.icon}
                      <CardTitle className="text-sm font-semibold">
                        {skill.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience">
              {tabData.experience.map((exp, index) => (
                <Card
                  key={index}
                  className="mb-4 hover:shadow-lg transition-all"
                >
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-base">{exp.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {exp.company}
                        </p>
                      </div>
                      <Briefcase className="text-primary w-5 h-5 shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="education">
              {tabData.education.map((edu, index) => (
                <Card
                  key={index}
                  className="mb-4 hover:shadow-lg transition-all"
                >
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-base">{edu.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {edu.institution}
                        </p>
                      </div>
                      <GraduationCap className="text-primary w-5 h-5 shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex space-x-4">
            <Button asChild>
              <a href="/images/SabehShaikhResume.pdf" target="_blank">
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}