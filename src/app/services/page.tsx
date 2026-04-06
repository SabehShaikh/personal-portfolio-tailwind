import {
  Code,
  Layers,
  Server,
  Monitor,
  Brain,
  Cpu,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  technologies,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  technologies: string[];
}) => (
  <Card className="hover:shadow-lg transition-all duration-300 group">
    <CardHeader>
      <div className="flex items-center space-x-4 mb-2">
        <Icon className="w-8 h-8 text-primary group-hover:rotate-6 transition-transform" />
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full hover:bg-primary/20 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive, performant web interfaces with modern frameworks. Clean code, smooth UX, and pixel-perfect implementation.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Developing scalable server-side applications and REST APIs with proper database integration and clean architecture.",
      technologies: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
    },
    {
      icon: Layers,
      title: "Full Stack Solutions",
      description:
        "End-to-end web application development — from database design to deployment. One person, full ownership.",
      technologies: ["Next.js", "FastAPI", "PostgreSQL", "Vercel", "Docker"],
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Integrating large language models and AI features into web applications — chatbots, RAG pipelines, and smart search.",
      technologies: ["Groq", "Gemini API", "Qdrant", "LangChain", "Python"],
    },
    {
      icon: Monitor,
      title: "Responsive & UI Design",
      description:
        "Designing and building mobile-first interfaces that look great across all screen sizes and devices.",
      technologies: ["Tailwind CSS", "Figma", "CSS Grid", "Flexbox"],
    },
    {
      icon: Cpu,
      title: "API Development & Integration",
      description:
        "Building and connecting REST APIs, third-party integrations, and cloud services into cohesive applications.",
      technologies: ["REST APIs", "Postman", "Cloudinary", "Firebase"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">What I Can Do</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          From frontend interfaces to backend APIs and AI-powered features — here&apos;s
          what I bring to the table as a developer.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            technologies={service.technologies}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
      </div>
    </div>
  );
}