"use client";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const tabData = {
    skills: [
      { 
        icon: <Code className="text-primary mr-2" />, 
        title: "UI/UX", 
        description: "Designing Web/App interfaces" 
      },
      { 
        icon: <CheckCircle2 className="text-primary mr-2" />, 
        title: "Front-End Development", 
        description: "Web/App Development" 
      },
      { 
        icon: <Award className="text-primary mr-2" />, 
        title: "Responsive Web Design", 
        description: "Creating mobile-friendly websites" 
      }
    ],
    experience: [
      {
        title: "Web Developer Intern",
        company: "Saylani Mass IT Training",
        period: "Aug 2023 - Dec 2023"
      },
      {
        title: "Remote Web/App Developer Intern",
        company: "CodeSoft",
        period: "Sept - Oct 2023"
      },
      {
        title: "Remote Web Developer Intern",
        company: "TechnoHacks",
        period: "Oct 2023"
      }
    ],
    education: [
      {
        title: "Bachelor of Computer Science (BSCS)",
        institution: "Federal Urdu University",
        period: "2023 - Present"
      },
      {
        title: "Generative AI Engineer",
        institution: "Governor Sindh Initiative",
        period: "Feb 2024 - Present"
      },
      {
        title: "MERN Stack Web Development",
        institution: "Saylani Mass IT Training",
        period: "Jan 2023 - Dec 2023"
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/mypic.jpg"
            alt="Sabeh Shaikh"
            width={400}
            height={400}
            className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 shadow-lg"
          />
        </div>

        {/* About Content */}
        <div>
          <h1 className="text-4xl text-center md:text-left font-bold mb-6">About Me</h1>
          <p className="text-muted-foreground mb-8">
            Dedicated MERN Stack Developer passionate about creating user-centric 
            and visually captivating websites. Proficient in HTML, CSS, and JavaScript, 
            with a strong focus on React JS and full-stack development. Currently 
            expanding expertise in Generative AI and TypeScript.
          </p>

          <Tabs 
            defaultValue="skills" 
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <div className="grid md:grid-cols-2 gap-4">
                {tabData.skills.map((skill, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      {skill.icon}
                      <CardTitle>{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience">
              {tabData.experience.map((exp, index) => (
                <Card key={index} className="mb-4 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Briefcase className="text-primary" />
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
                <Card key={index} className="mb-4 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>{edu.title}</CardTitle>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <GraduationCap className="text-primary" />
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
            <Button>
              <a href="/images/SabehShaikhUpdatedResume.pdf" target="_blank">Download Resume</a>
            </Button>
            <Button variant="outline">
              <a href="/contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}