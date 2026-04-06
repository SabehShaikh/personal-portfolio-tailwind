import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Wrench, Github, Linkedin, Mail } from "lucide-react";

type SkillCardProps = {
  icon: React.ElementType;
  title: string;
  skills: string[];
};

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => (
  <Card className="w-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/60">
    <CardHeader className="pb-3">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="text-primary w-5 h-5" />
        </div>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-xs font-medium px-2.5 py-1">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const HomePage = () => {
  const skills = {
    frontend: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS"],
    backend: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Vercel", "Docker", "Postman", "Cloudinary"],
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Sabeh Shaikh
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Full Stack Developer &amp; AI Enthusiast
          <br />
          <span className="text-sm">
            Building fast, responsive, and intelligent web experiences.
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href="/images/SabehShaikhResume.pdf" target="_blank">
              Download Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/contact">Contact Me</a>
          </Button>
        </div>
        <div className="flex justify-center gap-5 pt-1">
          <a
            href="https://github.com/SabehShaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sabeh-shaikh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:sabehshaikh201@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <p className="text-sm text-muted-foreground">
            Tools and technologies I work with
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <SkillCard icon={Code} title="Frontend" skills={skills.frontend} />
          <SkillCard icon={Server} title="Backend" skills={skills.backend} />
          <SkillCard icon={Wrench} title="Tools" skills={skills.tools} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;