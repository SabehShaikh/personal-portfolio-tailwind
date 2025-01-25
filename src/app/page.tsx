import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, Server, Github, Linkedin, Mail } from "lucide-react";

type SkillCardProps = {
  icon: React.ElementType;
  title: string;
  skills: string[];
};

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => (
  <Card className="w-full hover:shadow-lg transition-all duration-300">
    <CardHeader>
      <div className="flex items-center space-x-3">
        <Icon className="text-primary w-8 h-8" />
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-primary">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const HomePage = () => {
  const skills = {
    frontend: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    backend: ["Node.js", "Express", "MongoDB", "Firebase"],
    tools: ["Git", "Vercel", "Netlify", "Postman"],
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Sabeh Shaikh</h1>
        <p className="text-xl text-muted-foreground">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <a href="/images/SabehShaikhUpdatedResume.pdf" target="_blank">
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/contact">Contact Me</a>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <SkillCard icon={Code} title="Frontend" skills={skills.frontend} />
        <SkillCard icon={Server} title="Backend" skills={skills.backend} />
        <SkillCard icon={Database} title="Tools" skills={skills.tools} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center space-y-6">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <div className="flex justify-center space-x-6">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/SabehShaikh" target="_blank">
              <Github />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/sabeh-shaikh/" target="_blank">
              <Linkedin />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:sabehshaikh201@gmail.com">
              <Mail />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
