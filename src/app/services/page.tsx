import { 
  Code, 
  Layers, 
  PenTool, 
  Server, 
  Monitor 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  technologies 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  technologies: string[] 
}) => (
  <Card className="hover:shadow-lg transition-all duration-300 group">
    <CardHeader>
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="w-10 h-10 text-primary group-hover:rotate-6 transition" />
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
        <span 
        key={index} 
        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full hover:bg-primary/20 transition-all"
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
          title: "Web Development",
          description: "Creating robust, scalable web applications with modern technologies and best practices.",
          technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"]
        },
        {
          icon: PenTool,
          title: "UI/UX Design",
          description: "Designing intuitive, user-centered interfaces that enhance user experience and engagement.",
          technologies: ["Figma", "Wireframing", "Prototyping"]
        },
        {
          icon: Monitor,
          title: "Responsive Design",
          description: "Developing mobile-first, adaptive websites that look great on all devices and screen sizes.",
          technologies: ["CSS Grid", "Flexbox", "Media Queries", "Bootstrap"]
        },
        {
          icon: Server,
          title: "Backend Development",
          description: "Building efficient, scalable server-side applications with robust database integration.",
          technologies: ["Node.js", "Express", "MongoDB"]
        },
        {
          icon: Layers,
          title: "Full Stack Solutions",
          description: "End-to-end web application development from concept to deployment.",
          technologies: ["MERN Stack", "Git", "Vercel"]
        }
      ];
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive web solutions tailored to bring your digital vision to life, 
          combining technical expertise with creative design.
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
      <Button size="lg">
  Contact Me
</Button>
        </Link>

      </div>
    </div>
  );
}